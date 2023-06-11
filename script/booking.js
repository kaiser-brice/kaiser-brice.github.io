// Get the elements
const dateInput = document.getElementById("date");
const timeSlotSelect = document.getElementById("timeslot");

// Function to update the available time slots based on the selected date
function updateAvailableTimeSlots() {
  // Get the selected date value
  const selectedDate = dateInput.value;

  // Clear the current time slot options
  timeSlotSelect.innerHTML = '<option value="">Select a time slot</option>';

  // Get the available time slots for the selected date from your backend or predefined data
  // Replace the example below with your own logic
  const availableTimeSlots = getAvailableTimeSlots(selectedDate);

  // Create new option elements for each available time slot
  availableTimeSlots.forEach((timeSlot) => {
    const option = document.createElement("option");
    option.value = timeSlot;
    option.textContent = timeSlot;
    timeSlotSelect.appendChild(option);
  });
}

// Event listener for the date input change event
dateInput.addEventListener("input", updateAvailableTimeSlots);

// Example function to retrieve available time slots from the backend or predefined data
function getAvailableTimeSlots(selectedDate) {
  // Replace this with your own logic to fetch available time slots
  // based on the selected date from your backend or predefined data
  // Here, we are returning some example time slots for demonstration purposes
  return [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];
}

// Function to check if a date is in the past
function isPastDate(dateString) {
  const currentDate = new Date().toISOString().split("T")[0];
  return dateString < currentDate;
}

function isCurrentDate(dateString) {
  const currentDate = new Date().toISOString().split("T")[0];
  return dateString == currentDate;
}

// Function to check if a time is in the past
function isPastTime(timeString) {
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
  });
  return timeString < currentTime;
}

// Event listener for the form submission
document.querySelector("form").addEventListener("submit", function (event) {
  // Get the selected date and time
  const selectedDate = dateInput.value;
  const selectedTime = timeSlotSelect.value;

  // Check if the selected date is in the past
  if (isPastDate(selectedDate)) {
    event.preventDefault(); // Prevent form submission
    alert("Cannot book a past date."); // Show an error message
  }

  // Check if the selected time is in the past
  if (isCurrentDate(selectedDate) && isPastTime(selectedTime)) {
    event.preventDefault(); // Prevent form submission
    alert("Cannot book a past time slot."); // Show an error message
  } else {
    const fullName = document.getElementById("fullname").value;

    // Display the confirmation message
    const confirmationMessage = `Thank you, ${fullName}! Your booking is confirmed for ${selectedDate} at ${selectedTime}.`;
    alert(confirmationMessage);
    setTimeout(function () {
      window.location.href = "index.html";
    }, 3000);
  }
});

// Disable past dates in the date picker
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

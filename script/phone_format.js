// Function to validate and format the phone number input
function validatePhoneNumber() {
  const phoneNumberInput = document.getElementById("phone");
  const phoneNumber = phoneNumberInput.value.replace(/\D/g, "");
  const formattedPhoneNumber = phoneNumber.replace(
    /(\d{3})(\d{3})(\d{4})/,
    "$1-$2-$3"
  );
  phoneNumberInput.value = formattedPhoneNumber;

  // Check if the entered phone number is in the correct format
  const validPhoneNumber = /^\d{3}-\d{3}-\d{4}$/;
  if (!validPhoneNumber.test(formattedPhoneNumber)) {
    alert("Please enter the phone number in the format XXX-XXX-XXXX.");
  }
}

// Event listener for phone number input on blur (when losing focus)
document.getElementById("phone").addEventListener("blur", validatePhoneNumber);

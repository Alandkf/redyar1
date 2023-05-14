function webb(){
    document.getElementById("web").checked=true;
    document.getElementById("design").checked=false;
    document.getElementById("abt").innerHTML="Tell us about your web";
}

function designn(){
    document.getElementById("design").checked=true;
    document.getElementById("web").checked=false;
    document.getElementById("abt").innerHTML="Tell us about your design";
}


function validateForm(event) {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const locationInput = document.getElementById('location');
    const phoneInput = document.getElementById('phone_number');
    const projectTypeInput = document.querySelector('input[name="project_type"]:checked');
    const projectDetailsInput = document.getElementById('project-details');
    const errorMessage = document.getElementById('error-message');

    if (!nameInput.value || !emailInput.value || !locationInput.value || !phoneInput.value || !projectTypeInput || !projectDetailsInput.value) {
      errorMessage.innerText = 'Please fill in all required fields.';
      errorMessage.style.display = 'block';
      event.preventDefault();
    } else if (nameInput.value.length < 2) {
      errorMessage.innerText = 'Please enter a name that is at least 2 characters long.';
      errorMessage.style.display = 'block';
      event.preventDefault();
    } else if (phoneInput.value.length > 14) {
      errorMessage.innerText = 'Please enter a phone number that is less than 15 characters long.';
      errorMessage.style.display = 'block';
      event.preventDefault();
    } else if (!isValidPhoneNumber(phoneInput.value)) {
      errorMessage.innerText = 'Please enter a valid phone number.';
      errorMessage.style.display = 'block';
      event.preventDefault();
    } else {
      errorMessage.style.display = 'none';
    }
  }

  function isValidPhoneNumber(phoneNumber) {
    // Use a regular expression to check if the phone number is valid
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phoneNumber);
  }
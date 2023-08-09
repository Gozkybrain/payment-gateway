// Function to update the card details
function updateCardDetails() {
    // Get references to the input elements
    const cardNumber = document.getElementById('card-number');
    const cardHolder = document.getElementById('card-holder');
    const expiry = document.getElementById('expiry');
    const cvv = document.getElementById('cvv');
  
    // Update card number validity class
    if (cardNumber.value && cardNumber.checkValidity()) {
      cardNumber.classList.add('valid');
    } else {
      cardNumber.classList.remove('valid');
    }
  
    // Update card holder validity class
    if (cardHolder.value && cardHolder.checkValidity()) {
      cardHolder.classList.add('valid');
    } else {
      cardHolder.classList.remove('valid');
    }
  
    // Update expiry validity class
    if (expiry.value && expiry.checkValidity()) {
      expiry.classList.add('valid');
    } else {
      expiry.classList.remove('valid');
    }
  
    // Update CVV validity class
    if (cvv.value && cvv.checkValidity()) {
      cvv.classList.add('valid');
    } else {
      cvv.classList.remove('valid');
    }
  
    // Update the card number displayed on the card
    const cardNumberElement = document.querySelector('.card-number');
    cardNumberElement.textContent = cardNumber.value ? cardNumber.value : '**** **** **** ****';
  
    // Update the card holder name displayed on the card
    const cardHolderElement = document.querySelector('.card-holder');
    cardHolderElement.textContent = cardHolder.value ? cardHolder.value.toUpperCase() : 'CARD HOLDER';
  
    // Update the expiry date displayed on the card
    const expiryElement = document.querySelector('.expiry');
    expiryElement.textContent = expiry.value ? expiry.value : 'MM/YY';
  
    // Update the CVV displayed on the card
    const cvvElement = document.querySelector('.cvv');
    cvvElement.textContent = cvv.value ? cvv.value : 'CVV';
  }
  
  // Function to display success message
  function showSuccessMessage() {
    // Get reference to the success message element
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
  }
  
  // Function to display error message
  function showErrorMessage() {
    // Get reference to the error message element
    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'block';
  }
  
  // Function to hide success and error messages
  function hideMessages() {
    // Get references to the success and error message elements
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
  }
  
  // Function to validate the form
  function validateForm(event) {
    event.preventDefault();
  
    // Get values from the input fields
    const cardNumber = document.getElementById('card-number').value;
    const cvv = document.getElementById('cvv').value;
  
    // Hide any displayed messages
    hideMessages();
  
    // Validate card number
    if (!cardNumber || cardNumber.length !== 16 || isNaN(cardNumber)) {
      showErrorMessage();
      return;
    }
  
    // Validate CVV
    if (!cvv || cvv.length !== 3 || isNaN(cvv)) {
      showErrorMessage();
      return;
    }
  
    // Display success message if validation passes
    showSuccessMessage();
  }
  
  // Add event listeners
  document.getElementById('card-number').addEventListener('input', updateCardDetails);
  document.getElementById('card-holder').addEventListener('input', updateCardDetails);
  document.getElementById('expiry').addEventListener('input', updateCardDetails);
  document.getElementById('cvv').addEventListener('input', updateCardDetails);
  document.getElementById('payment-form').addEventListener('submit', validateForm);
  
  // Get references to the card and CVV field
  const card = document.querySelector('.card');
  const cvvField = document.getElementById('cvv');
  
  // Add event listener for CVV field focus
  cvvField.addEventListener('focus', function () {
    // Add the 'flipped' class to the card to trigger the flip animation
    card.classList.add('flipped');
  });
  
  // Add event listener for CVV field blur
  cvvField.addEventListener('blur', function () {
    // Remove the 'flipped' class from the card to revert back to the front view
    card.classList.remove('flipped');
  });
  
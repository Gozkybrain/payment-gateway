# Payment Gateway Front-End Project

## Overview
This project aims to develop a front-end interface for a payment gateway using card-based transactions. It provides users with a seamless experience for entering card details and seeing this information in real-time. The interface now includes additional features that enhance usability, security, and communication.

## Technologies Used
- HTML
- CSS
- JavaScript
- Bootstrap 
- FontAwesome 
- Email.js (for email notifications)

## Installation Guide
1. Clone the repository: `git clone <repository_url>`
2. Navigate to the project directory: `cd payment-gateway`
3. Open the `index.html` file in a web browser.

## Usage
1. Fill in the required card details in the form fields.
2. As you enter the information, the card sample will update in real-time.
3. Ensure the card number consists of only numeric digits and has a specific length.
4. The CVV should also be numeric and have a specific length.
5. The holder name field should contain only alphabetical characters.
6. Upon successful submission, a pop-up message will indicate the payment was successful.
7. In case of validation errors, error messages will guide you in correcting the input.

## New Features

### Interactive CVV Input
The card's back view is now interactive. When you focus on the CVV field, the card flips to reveal the back view, allowing you to enter the CVV in a secure and intuitive manner.

### Real-Time Card Sample Update
As you enter card details (cardholder name, card number, expiry date, CVV), the card sample on the interface updates in real-time to provide an accurate visual representation of the entered information.

### Form Clearing
After submitting the form, the form fields are automatically cleared, providing a clean slate for the next transaction. This ensures that sensitive information is not retained after a successful payment.

### Email Notification
Upon successful payment submission, the system triggers an email notification to the user's provided email address using Email.js. This notification serves as a confirmation of the successful transaction.

### Updated Error and Success Messages
The error and success messages now feature FontAwesome icons to provide a clearer visual indicator of the message type. Error messages guide you in correcting any invalid input, while the success message confirms a successful payment.

## Design and Layout
The front-end interface of the payment gateway project features a visually appealing and user-friendly design. The layout consists of two main sections: the card sample display and the form fields.

### Card Sample Display
The card sample is dynamically updated in real-time as the user enters their card details. It provides a visual representation of the entered information, creating an interactive experience.

- **Front of Card**: The front view of the card showcases the cardholder's name, formatted card number, card type, and expiry date.
- **Back of Card**: The back view of the card displays the CVV. When the user focuses on the CVV field, the card flips to reveal the back view.

### Form Fields and Validation
The form fields provide an intuitive way for users to enter their card details. Various validations ensure accurate and secure information submission.

### Success and Error Messages
Upon successful submission of the form, a pop-up message will appear, confirming the successful payment and email notification. In case of validation errors, error messages will guide you in correcting your input.

With these new features, the payment gateway front-end project delivers an even more interactive, intuitive, and secure user experience for seamless card-based transactions.

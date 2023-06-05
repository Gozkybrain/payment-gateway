# Payment Gateway Front-End Project

## Overview
This project aims to develop a front-end interface for a payment gateway using card-based transactions. It provides users with a seamless experience for entering card details and seeing this info in real-time.

## Technologies Used
- HTML
- CSS
- JavaScript
- Bootstrap 
- FontAwesome 

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

## Design and Layout
The front-end interface of the payment gateway project features a visually appealing and user-friendly design. The layout consists of two main sections: the card sample display and the form fields.

### Card Sample Display
The card sample is dynamically updated in real-time as the user enters their card details. It provides a visual representation of the entered information, creating an interactive experience. The card design includes front and back views, which are displayed based on user interaction.

* `Front of Card`: The front view of the card showcases the cardholder's name, card number, card type, and expiry date. As the user types their information into the corresponding form fields, the card sample updates instantly, reflecting the entered data.
* `Back of Card`: The back view of the card displays the CVV (Card Verification Value). When the user focuses on the CVV field, the card flips to reveal the back view, enhancing the interactive nature of the interface.

### Form Fields and Validation
The form fields provide an intuitive way for users to enter their card details. The following validations are implemented to ensure accurate and secure information submission:

* `Card Number`: Only numeric digits are allowed, and the card number must adhere to a specific length requirement. If the entered card number is invalid, an error message will be displayed to guide the user.
* `CVV`: The CVV field accepts only numeric digits and must have a specific length. When the user focuses on the CVV field, the card flips to the back view to facilitate the entry of the CVV.
* `Holder Name`: The holder name field accepts alphabetical characters only. It ensures that the user enters a valid name without any numeric or special characters.

### Success and Error Messages
Upon successful submission of the form, a pop-up message will appear, confirming the successful payment. This provides immediate feedback to the user and assures them that their transaction was processed successfully.

In case of validation errors or missing required information, error messages will be displayed near the respective form fields. These error messages guide the user in correcting their input and ensure that all necessary information is provided for a successful payment.

With this design and layout, the payment gateway front-end project delivers an interactive and intuitive user experience, making the process of entering card details seamless and secure.

## Future Improvements
As usual, I have left options for future improvements deliberately so that developers can have something different while trying out this project.
1. The card number can be fixed in a way to make it have a space after each 4 digits.
2. For security we can add a hide icon, after clicking hides the card numbers with stars, revealing only a few that are stated to show.
3. The Month and Year can be fixed in a way that when the months is less than 10, it shows as eg. 09.
4. There is a compulsory slash between the month and the year.

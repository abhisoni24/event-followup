This project is a simple web application that allows users to sign up with their first name and email address. Upon submission, the application sends a welcome email to the provided address with an attachment.

## Features

- Single-page web interface for user signup
- Backend server handling form submissions
- Email sending functionality with customizable content and attachments
- Simple and easy to deploy

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine
- An SMTP server or email service provider for sending emails

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/email-signup-project.git
cd email-signup-project

2. Install the dependencies:

3. Configure your email settings:
Open `server.js` and update the following section with your email service details:
```javascript
let transporter = nodemailer.createTransport({
  host: 'your-smtp-host',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password'
  }
});
```
4. Add your welcome attachment:
   Place your welcome.pdf file (or any other attachment) in the attachments directory.

Usage

1. Start the server: npm start
2. Open a web browser and navigate to http://localhost:3000
3. Fill out the form with a first name and email address, then submit.
4. Check the provided email address for the welcome message and attachment.

Project Structure

server.js: The main server file containing the Express.js setup and email sending logic
public/index.html: The frontend HTML file with the signup form
attachments/: Directory for storing email attachments

Customization

To modify the email content, update the mailOptions object in server.js
To change the form fields or layout, edit public/index.html

Deployment

This application can be deployed to various cloud platforms that support Node.js applications, such as Heroku, DigitalOcean, or AWS Elastic Beanstalk.
Remember to set your email service credentials as environment variables when deploying to production.
Contributing
Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.

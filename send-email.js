const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { firstName, email } = JSON.parse(event.body);

  // Configure your email transport
  let transporter = nodemailer.createTransport({
    host: 'your-smtp-host',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password'
    }
  });

  // Prepare email content
  let mailOptions = {
    from: 'your-email@example.com',
    to: email,
    subject: 'Welcome to Our Service',
    text: `Hello ${firstName},\n\nThank you for signing up!\n\nBest regards,\nYour Team`,
    attachments: [
      {
        filename: 'welcome.pdf',
        path: './welcome.pdf' // Path to your attachment file
      }
    ]
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' })
    };
  }
};
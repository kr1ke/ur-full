const nodemailer = require('nodemailer');

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

/**
 * Send email with contact form data
 * @param {Object} formData - Contact form data
 * @param {string} formData.name - Name of the person
 * @param {string} formData.phone - Phone number
 * @param {string} formData.message - Message content
 */
const sendContactFormEmail = async (formData) => {
  const { name, phone, message } = formData;
  
  const transporter = createTransporter();
  
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Новая заявка с сайта от ${name}`,
    text: `
      Имя: ${name}
      Телефон: ${phone}
      Сообщение: ${message}
    `,
    html: `
      <h2>Новая заявка с сайта</h2>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Сообщение:</strong> ${message}</p>
    `
  };
  
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

module.exports = {
  sendContactFormEmail
};

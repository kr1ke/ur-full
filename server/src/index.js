require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const emailService = require('./services/emailService');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Validation middleware for contact form
const validateContactForm = [
  body('name').trim().notEmpty().withMessage('Имя обязательно'),
  body('phone').trim().notEmpty().withMessage('Номер телефона обязателен'),
  body('message').trim().notEmpty().withMessage('Сообщение обязательно')
];

// Contact form endpoint
app.post('/api/contact', validateContactForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, phone, message } = req.body;

    // Send email
    await emailService.sendContactFormEmail({
      name,
      phone,
      message
    });

    res.status(200).json({ 
      success: true, 
      message: 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Произошла ошибка при обработке заявки. Пожалуйста, попробуйте снова позже.' 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

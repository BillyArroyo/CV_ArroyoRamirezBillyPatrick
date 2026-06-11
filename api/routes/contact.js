'use strict';

const { Router } = require('express');
const rateLimit  = require('express-rate-limit');
const { body }   = require('express-validator');
const ContactController = require('../controllers/ContactController');

const router = Router();

// Stricter rate limit on the contact endpoint
const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Demasiados mensajes enviados. Por favor espera 15 minutos.' },
});

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre debe tener entre 2 y 100 caracteres.')
    .escape(),

  body('email')
    .trim()
    .isEmail()
    .withMessage('Correo electrónico inválido.')
    .normalizeEmail(),

  body('subject')
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage('El asunto debe tener entre 5 y 200 caracteres.')
    .escape(),

  body('message')
    .trim()
    .isLength({ min: 20, max: 2000 })
    .withMessage('El mensaje debe tener entre 20 y 2000 caracteres.')
    .escape(),
];

router.post('/', contactRateLimit, contactValidation, ContactController.send);

module.exports = router;

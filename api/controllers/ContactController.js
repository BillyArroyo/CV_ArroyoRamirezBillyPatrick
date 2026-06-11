'use strict';

const { validationResult } = require('express-validator');
const EmailService = require('../services/EmailService');

class ContactController {
  /**
   * POST /api/contact
   * Validates payload and delegates to EmailService.
   */
  static async send(req, res, next) {
    // Collect express-validator errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        error: 'Datos inválidos.',
        fields: errors.array().reduce((acc, e) => {
          acc[e.path] = e.msg;
          return acc;
        }, {}),
      });
    }

    const { name, email, subject, message } = req.body;

    try {
      await EmailService.sendContact({ name, email, subject, message });
      res.status(200).json({ message: 'Mensaje enviado correctamente.' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ContactController;

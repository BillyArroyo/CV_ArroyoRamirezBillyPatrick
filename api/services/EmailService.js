'use strict';

const nodemailer = require('nodemailer');

/**
 * EmailService — sends contact form emails via Nodemailer.
 *
 * Required environment variables:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 *   CONTACT_RECIPIENT  — where to deliver the message (your email)
 *
 * For Gmail: use App Password (https://myaccount.google.com/apppasswords)
 * For dev/testing: set SMTP_HOST=smtp.ethereal.email and use Ethereal test creds.
 */
class EmailService {
  static #transporter = null;

  static #getTransporter() {
    if (EmailService.#transporter) return EmailService.#transporter;

    EmailService.#transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    return EmailService.#transporter;
  }

  /**
   * Send a contact form submission by email.
   * @param {{ name, email, subject, message }} payload
   */
  static async sendContact({ name, email, subject, message }) {
    const to = process.env.CONTACT_RECIPIENT;
    if (!to) throw new Error('CONTACT_RECIPIENT env variable is not set.');

    const transport = EmailService.#getTransporter();

    await transport.sendMail({
      from:    `"Portafolio Contact" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `[Portafolio] ${subject}`,
      text:    `Nuevo mensaje desde el portafolio\n\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html:    EmailService.#buildHtml({ name, email, subject, message }),
    });
  }

  static #buildHtml({ name, email, subject, message }) {
    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><style>
  body { font-family: sans-serif; background:#f4f4f4; margin:0; padding:24px; }
  .card { background:#fff; border-radius:8px; padding:32px; max-width:600px; margin:auto; box-shadow:0 2px 8px rgba(0,0,0,.1); }
  h2 { color:#00b5c0; margin-top:0; }
  .field { margin:16px 0; }
  .label { font-size:.8rem; color:#999; text-transform:uppercase; letter-spacing:.08em; }
  .value { font-size:1rem; color:#333; margin-top:4px; }
  .message { background:#f9f9f9; border-left:3px solid #00b5c0; padding:12px 16px; border-radius:4px; white-space:pre-wrap; }
</style></head>
<body>
<div class="card">
  <h2>Nuevo mensaje desde el portafolio</h2>
  <div class="field"><div class="label">Nombre</div><div class="value">${name}</div></div>
  <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}">${email}</a></div></div>
  <div class="field"><div class="label">Asunto</div><div class="value">${subject}</div></div>
  <div class="field"><div class="label">Mensaje</div><div class="value message">${message}</div></div>
</div>
</body>
</html>`;
  }
}

module.exports = EmailService;

/**
 * ContactService — handles contact form validation and submission.
 *
 * Submission target: Formspree (free, no backend needed for static sites).
 * Setup: create a free account at https://formspree.io → create a form
 *        → replace FORMSPREE_ENDPOINT below with your endpoint URL.
 */
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export class ContactService {
  /**
   * Validates a contact form payload.
   * Returns { valid: bool, errors: Record<string, string> }
   */
  validate(payload) {
    const errors = {};

    if (!payload.name?.trim() || payload.name.trim().length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres.';
    }

    if (!payload.email?.trim() || !this.#isValidEmail(payload.email)) {
      errors.email = 'Ingresa un correo electrónico válido.';
    }

    if (!payload.subject?.trim() || payload.subject.trim().length < 5) {
      errors.subject = 'El asunto debe tener al menos 5 caracteres.';
    }

    if (!payload.message?.trim() || payload.message.trim().length < 20) {
      errors.message = 'El mensaje debe tener al menos 20 caracteres.';
    }

    return { valid: Object.keys(errors).length === 0, errors };
  }

  /**
   * Submits the payload to Formspree.
   * Throws on network failure; returns response JSON on success.
   */
  async submit(payload) {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body:    JSON.stringify({
        name:    payload.name.trim(),
        email:   payload.email.trim(),
        subject: payload.subject.trim(),
        message: payload.message.trim(),
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(body?.error ?? `HTTP ${response.status}`);
    }

    return response.json();
  }

  #isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }
}

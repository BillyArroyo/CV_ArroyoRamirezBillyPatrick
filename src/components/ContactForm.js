import { BaseComponent } from './BaseComponent.js';
import { ContactService } from '../services/ContactService.js';

/**
 * ContactForm — validates and submits the contact form.
 * Manages loading state, inline validation, and success/error feedback.
 */
export class ContactForm extends BaseComponent {
  #service;
  #submitBtn;
  #successEl;
  #globalErrorEl;

  #fields = {
    name:    { inputId: 'contactName',    errorId: 'nameError' },
    email:   { inputId: 'contactEmail',   errorId: 'emailError' },
    subject: { inputId: 'contactSubject', errorId: 'subjectError' },
    message: { inputId: 'contactMessage', errorId: 'messageError' },
  };

  constructor(selector) {
    super(selector);
    this.#service      = new ContactService();
    this.#submitBtn    = document.getElementById('submitBtn');
    this.#successEl    = document.getElementById('formSuccess');
    this.#globalErrorEl = document.getElementById('formGlobalError');
  }

  render() {}

  bindEvents() {
    if (!this.root) return;

    // Inline validation on blur
    Object.entries(this.#fields).forEach(([field, { inputId }]) => {
      const input = document.getElementById(inputId);
      input?.addEventListener('blur', () => this.#validateField(field, input.value));
      input?.addEventListener('input', () => this.#clearFieldError(field));
    });

    this.root.addEventListener('submit', (e) => this.#handleSubmit(e));
  }

  async #handleSubmit(e) {
    e.preventDefault();

    const payload = this.#collectPayload();
    const { valid, errors } = this.#service.validate(payload);

    if (!valid) {
      this.#showErrors(errors);
      this.#focusFirstError(errors);
      return;
    }

    this.#setLoading(true);
    this.#hideMessages();

    try {
      await this.#service.submit(payload);
      this.#showSuccess();
      this.root.reset();
    } catch {
      this.#showGlobalError();
    } finally {
      this.#setLoading(false);
    }
  }

  #collectPayload() {
    return Object.fromEntries(
      Object.entries(this.#fields).map(([field, { inputId }]) => [
        field,
        document.getElementById(inputId)?.value ?? '',
      ]),
    );
  }

  #validateField(field, value) {
    const { errors } = this.#service.validate({ [field]: value });
    if (errors[field]) this.#showFieldError(field, errors[field]);
  }

  #showErrors(errors) {
    Object.entries(errors).forEach(([field, msg]) => this.#showFieldError(field, msg));
  }

  #showFieldError(field, msg) {
    const { inputId, errorId } = this.#fields[field];
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    input?.classList.add('is-error');
    if (error) error.textContent = msg;
  }

  #clearFieldError(field) {
    const { inputId, errorId } = this.#fields[field];
    document.getElementById(inputId)?.classList.remove('is-error');
    const error = document.getElementById(errorId);
    if (error) error.textContent = '';
  }

  #focusFirstError(errors) {
    const firstField = Object.keys(errors)[0];
    if (firstField) {
      document.getElementById(this.#fields[firstField].inputId)?.focus();
    }
  }

  #setLoading(loading) {
    if (!this.#submitBtn) return;
    this.#submitBtn.disabled = loading;
    this.#submitBtn.setAttribute('aria-disabled', String(loading));
    const text = this.#submitBtn.querySelector('.btn-text');
    if (text) text.textContent = loading ? 'Enviando...' : 'Enviar mensaje';
  }

  #showSuccess() {
    if (this.#successEl) this.#successEl.hidden = false;
  }

  #showGlobalError() {
    if (this.#globalErrorEl) this.#globalErrorEl.hidden = false;
  }

  #hideMessages() {
    if (this.#successEl)    this.#successEl.hidden    = true;
    if (this.#globalErrorEl) this.#globalErrorEl.hidden = true;
  }
}

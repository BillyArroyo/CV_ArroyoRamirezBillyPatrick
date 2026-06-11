import { BaseModel } from './BaseModel.js';

/**
 * Developer — represents the portfolio owner's profile.
 */
export class Developer extends BaseModel {
  constructor(data) {
    super(data);
    this.name          = data.name;
    this.role          = data.role;
    this.location      = data.location;
    this.email         = data.email;
    this.phone         = data.phone    ?? null;
    this.github        = data.github   ?? null;
    this.linkedin      = data.linkedin ?? null;
    this.bio           = data.bio      ?? '';
    this.available     = data.available ?? true;
    this.typingRoles   = data.typingRoles ?? [data.role];
  }

  validate() {
    const errors = [];
    if (!this.name)  errors.push('name is required');
    if (!this.email) errors.push('email is required');
    return errors;
  }

  isAvailable() { return this.available; }

  getContactLinks() {
    return [
      this.email    && { type: 'email',    label: 'Email',  href: `mailto:${this.email}`,   value: this.email },
      this.phone    && { type: 'phone',    label: 'Teléfono', href: `tel:${this.phone}`,    value: this.phone },
      this.github   && { type: 'github',   label: 'GitHub',  href: this.github,            value: `@${this.github.split('/').pop()}` },
      this.linkedin && { type: 'linkedin', label: 'LinkedIn', href: this.linkedin,          value: this.linkedin },
    ].filter(Boolean);
  }

  toString() { return `[Developer: ${this.name}]`; }
}

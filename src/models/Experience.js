import { BaseModel } from './BaseModel.js';

/**
 * Experience — work or education entry in the timeline.
 */
export class Experience extends BaseModel {
  constructor(data) {
    super(data);
    this.company          = data.company;
    this.role             = data.role;
    this.from             = data.from;
    this.to               = data.to         ?? null;
    this.current          = data.current    ?? false;
    this.description      = data.description ?? '';
    this.responsibilities = data.responsibilities ?? [];
    this.tech             = data.tech        ?? [];
    this.type             = data.type        ?? 'work'; // 'work' | 'education'
    this.location         = data.location    ?? null;
    this.employmentType   = data.employmentType ?? null;
  }

  validate() {
    const errors = [];
    if (!this.company) errors.push('company is required');
    if (!this.role)    errors.push('role is required');
    if (!this.from)    errors.push('from date is required');
    return errors;
  }

  isCurrent()   { return this.current; }
  isWork()      { return this.type === 'work'; }
  isEducation() { return this.type === 'education'; }

  getDateRange() {
    const to = this.current ? 'Actualidad' : (this.to ?? '');
    return `${this.from} — ${to}`.trim();
  }

  toString() { return `[Experience: ${this.role} @ ${this.company}]`; }
}

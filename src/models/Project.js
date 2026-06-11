import { BaseModel } from './BaseModel.js';

/**
 * Project — represents a portfolio project entry.
 */
export class Project extends BaseModel {
  constructor(data) {
    super(data);
    this.id          = data.id;
    this.title       = data.title;
    this.description = data.description;
    this.tech        = data.tech        ?? [];
    this.featured    = data.featured    ?? false;
    this.status      = data.status      ?? 'completed'; // 'production' | 'completed' | 'wip'
    this.type        = data.type        ?? 'web';       // 'mobile' | 'web' | 'desktop' | 'cms'
    this.url         = data.url         ?? null;
    this.repoUrl     = data.repoUrl     ?? null;
  }

  validate() {
    const errors = [];
    if (!this.id)    errors.push('id is required');
    if (!this.title) errors.push('title is required');
    return errors;
  }

  isFeatured()         { return this.featured; }
  isLive()             { return this.status === 'production'; }
  hasTech(name)        { return this.tech.some(t => t.toLowerCase() === name.toLowerCase()); }
  getStatusLabel()     { return { production: 'En producción', completed: 'Completado', wip: 'En progreso' }[this.status] ?? this.status; }

  toString() { return `[Project: ${this.title}]`; }
}

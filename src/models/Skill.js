import { BaseModel } from './BaseModel.js';

/**
 * Skill — a single technology/tool with a proficiency level.
 */
export class Skill extends BaseModel {
  constructor(data) {
    super(data);
    this.name      = data.name;
    this.level     = data.level ?? 70;   // 0–100
    this.highlight = data.highlight ?? false;
    this.category  = data.category  ?? 'general';
  }

  validate() {
    const errors = [];
    if (!this.name)                           errors.push('name is required');
    if (this.level < 0 || this.level > 100)  errors.push('level must be 0–100');
    return errors;
  }

  getLevelLabel() {
    if (this.level >= 90) return 'Experto';
    if (this.level >= 75) return 'Avanzado';
    if (this.level >= 55) return 'Intermedio';
    return 'Básico';
  }

  toString() { return `[Skill: ${this.name} ${this.level}%]`; }
}

/**
 * SkillGroup — a logical grouping of related skills.
 */
export class SkillGroup extends BaseModel {
  constructor(data) {
    super(data);
    this.name   = data.name;
    this.icon   = data.icon  ?? 'code';
    this.skills = (data.skills ?? []).map(s => s instanceof Skill ? s : new Skill(s));
  }

  getHighlighted() { return this.skills.filter(s => s.highlight); }
  getNames()       { return this.skills.map(s => s.name); }

  toString() { return `[SkillGroup: ${this.name} (${this.skills.length} skills)]`; }
}

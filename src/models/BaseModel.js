/**
 * BaseModel — abstract base for all domain models.
 * Provides a uniform interface for construction, serialization and validation.
 */
export class BaseModel {
  constructor(data = {}) {
    if (new.target === BaseModel) {
      throw new TypeError('BaseModel cannot be instantiated directly.');
    }
    this._raw = data;
  }

  /** Override in subclasses to return validation errors array. */
  validate() {
    return [];
  }

  isValid() {
    return this.validate().length === 0;
  }

  toJSON() {
    const out = {};
    for (const [key, value] of Object.entries(this)) {
      if (!key.startsWith('_')) out[key] = value;
    }
    return out;
  }

  toString() {
    return `[${this.constructor.name}]`;
  }
}

/**
 * PortfolioService — facade for all portfolio data queries.
 * Decouples components from the raw data layer.
 */
export class PortfolioService {
  #data;

  constructor(portfolioData) {
    this.#data = portfolioData;
  }

  getDeveloper()      { return this.#data.developer; }
  getSkillGroups()    { return this.#data.skillGroups; }
  getKeySkills()      { return this.#data.keySkills; }
  getExperience()     { return this.#data.experience; }
  getEducation()      { return this.#data.education; }
  getProjects()       { return this.#data.projects; }

  getFeaturedProjects() {
    return this.#data.projects.filter((p) => p.isFeatured());
  }

  getProjectById(id) {
    return this.#data.projects.find((p) => p.id === id) ?? null;
  }

  getProjectsByType(type) {
    return this.#data.projects.filter((p) => p.type === type);
  }

  getProjectsByTech(tech) {
    return this.#data.projects.filter((p) => p.hasTech(tech));
  }

  getTypingRoles() {
    return this.#data.developer.typingRoles;
  }
}

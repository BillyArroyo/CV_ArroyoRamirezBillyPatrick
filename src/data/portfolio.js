/**
 * portfolio.js — single source of truth for all CV data.
 * Imported by PortfolioService to build model instances.
 */
import { Developer }            from '../models/Developer.js';
import { Project }              from '../models/Project.js';
import { Skill, SkillGroup }    from '../models/Skill.js';
import { Experience }           from '../models/Experience.js';

// ─── Developer Profile ──────────────────────────────────────────────────────
export const developer = new Developer({
  name:     'Billy Patrick Arroyo Ramírez',
  role:     'Full Stack Developer',
  location: 'Huancayo, Junín, Perú',
  email:    'onichichi.25@outlook.com',
  phone:    '+51 912 262 457',
  github:   'https://github.com/BillyArroyo',
  available: true,
  bio: `Estudiante de Ingeniería de Sistemas e Informática (9°–10° ciclo) y desarrollador Full Stack con experiencia real en producción. Creo en la arquitectura limpia, el código mantenible y las experiencias de usuario que importan.`,
  typingRoles: [
    'Full Stack Developer',
    'Mobile App Developer',
    'Flutter Enthusiast',
    'Problem Solver',
  ],
});

// ─── Skill Groups ────────────────────────────────────────────────────────────
export const skillGroups = [
  new SkillGroup({
    name: 'Lenguajes',
    icon: 'code',
    skills: [
      new Skill({ name: 'C#',         level: 85, highlight: false, category: 'language' }),
      new Skill({ name: 'Dart',       level: 90, highlight: true,  category: 'language' }),
      new Skill({ name: 'JavaScript', level: 80, highlight: false, category: 'language' }),
      new Skill({ name: 'Java',       level: 70, highlight: false, category: 'language' }),
      new Skill({ name: 'Python',     level: 72, highlight: false, category: 'language' }),
      new Skill({ name: 'SQL',        level: 75, highlight: false, category: 'language' }),
      new Skill({ name: 'HTML / CSS', level: 85, highlight: false, category: 'language' }),
    ],
  }),
  new SkillGroup({
    name: 'Frameworks & Librerías',
    icon: 'layout',
    skills: [
      new Skill({ name: 'Flutter',          level: 90, highlight: true,  category: 'framework' }),
      new Skill({ name: 'React',            level: 80, highlight: true,  category: 'framework' }),
      new Skill({ name: '.NET / .NET Core', level: 85, highlight: false, category: 'framework' }),
      new Skill({ name: 'Entity Framework', level: 78, highlight: false, category: 'framework' }),
      new Skill({ name: 'Firebase SDK',     level: 85, highlight: true,  category: 'framework' }),
    ],
  }),
  new SkillGroup({
    name: 'Bases de Datos',
    icon: 'database',
    skills: [
      new Skill({ name: 'MySQL',            level: 75, highlight: false, category: 'database' }),
      new Skill({ name: 'SQL Server',       level: 78, highlight: false, category: 'database' }),
      new Skill({ name: 'Cloud Firestore',  level: 85, highlight: true,  category: 'database' }),
      new Skill({ name: 'Firebase RTDB',    level: 80, highlight: false, category: 'database' }),
    ],
  }),
  new SkillGroup({
    name: 'Desarrollo Móvil',
    icon: 'smartphone',
    skills: [
      new Skill({ name: 'Flutter',         level: 90, highlight: true,  category: 'mobile' }),
      new Skill({ name: 'Firebase',        level: 85, highlight: false, category: 'mobile' }),
      new Skill({ name: 'Google Play',     level: 75, highlight: false, category: 'mobile' }),
      new Skill({ name: 'Apps Híbridas',   level: 80, highlight: false, category: 'mobile' }),
    ],
  }),
  new SkillGroup({
    name: 'Diseño & UX/UI',
    icon: 'globe',
    skills: [
      new Skill({ name: 'Figma',            level: 80, highlight: true,  category: 'design' }),
      new Skill({ name: 'Canva',            level: 75, highlight: false, category: 'design' }),
      new Skill({ name: 'Responsive Design', level: 85, highlight: false, category: 'design' }),
      new Skill({ name: 'Wireframing',      level: 78, highlight: false, category: 'design' }),
    ],
  }),
  new SkillGroup({
    name: 'DevOps & Herramientas',
    icon: 'tool',
    skills: [
      new Skill({ name: 'Git & GitHub',    level: 85, highlight: false, category: 'devops' }),
      new Skill({ name: 'Postman',         level: 78, highlight: false, category: 'devops' }),
      new Skill({ name: 'GitHub Actions',  level: 70, highlight: false, category: 'devops' }),
      new Skill({ name: 'WordPress',       level: 75, highlight: false, category: 'devops' }),
      new Skill({ name: 'Soporte Técnico', level: 80, highlight: false, category: 'devops' }),
    ],
  }),
];

// ─── Key Skill Levels (shown in sidebar bars) ───────────────────────────────
export const keySkills = [
  new Skill({ name: 'Flutter / Dart',   level: 90, category: 'framework' }),
  new Skill({ name: 'C# / .NET',        level: 85, category: 'framework' }),
  new Skill({ name: 'JavaScript / React', level: 80, category: 'framework' }),
  new Skill({ name: 'Firebase',         level: 85, category: 'database' }),
  new Skill({ name: 'SQL / Bases de datos', level: 75, category: 'database' }),
  new Skill({ name: 'UI/UX (Figma)',    level: 80, category: 'design' }),
];

// ─── Work Experience ─────────────────────────────────────────────────────────
export const experience = [
  new Experience({
    company:        'XulsTech',
    role:           'Desarrollador Móvil Flutter',
    from:           'Abr 2026',
    to:             null,
    current:        true,
    type:           'work',
    employmentType: 'Freelance',
    location:       'Huancayo, Perú',
    description:    'Desarrollo freelance de aplicación móvil para XulsTech, contribuyendo a la arquitectura, nuevas funcionalidades y mantenimiento de la app.',
    responsibilities: [
      'Implementación de nuevas funcionalidades en la app móvil con Flutter',
      'Integración de Firebase para autenticación y base de datos en tiempo real',
      'Aplicación del patrón BLoC para gestión de estado escalable',
      'Pruebas de endpoints de backend con Postman para validar integración API',
      'Revisión y optimización del rendimiento de la aplicación',
    ],
    tech: ['Flutter', 'Firebase', 'BLoC', 'Dart', 'Postman'],
  }),
  new Experience({
    company:        'FERREBOOM',
    role:           'Desarrollador Full Stack',
    from:           'Sep 2025',
    to:             'Abr 2026',
    current:        false,
    type:           'work',
    employmentType: 'Tiempo completo',
    location:       'Huancayo, Perú',
    description:    'Desarrollo y mantenimiento de la plataforma digital completa de FERREBOOM — app móvil en producción activa y sitio web corporativo.',
    responsibilities: [
      'Arquitectura e implementación del patrón BLoC para gestión de estado escalable',
      'Integración de Cloud Firestore para sincronización de datos en tiempo real',
      'Desarrollo de autenticación segura con Firebase Auth y manejo de sesiones',
      'Construcción y mantenimiento del sitio web corporativo con React',
      'Diseño UX/UI completo en Figma — wireframes, prototipo interactivo y handoff',
      'Optimización de rendimiento y soporte técnico continuo',
    ],
    tech: ['Flutter', 'Firebase', 'Cloud Firestore', 'React', 'Figma', 'BLoC Pattern'],
  }),
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education = [
  new Experience({
    company:  'Universidad Continental',
    role:     'Ingeniería de Sistemas e Informática',
    from:     '2021',
    to:       '2026',
    current:  false,
    type:     'education',
    location: 'Huancayo, Perú',
    description: 'Carrera orientada al desarrollo de software, arquitectura de sistemas, bases de datos, redes y gestión de proyectos TI. Cursando los últimos ciclos.',
    tech: ['Algoritmos y Estructuras de Datos', 'Ingeniería de Software', 'Bases de Datos', 'Redes y Comunicaciones', 'Gestión de Proyectos TI'],
  }),
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  new Project({
    id:          'ferreboom-app',
    title:       'App Móvil FERREBOOM',
    description: 'Aplicación multiplataforma en producción activa para gestión de inventario, ventas y catálogo ferretero. Arquitectura BLoC, sincronización en tiempo real con Cloud Firestore y diseño adaptativo completo. Actualmente en operación con usuarios reales.',
    tech:        ['Flutter', 'Firebase', 'Cloud Firestore', 'BLoC', 'Google Play'],
    featured:    true,
    status:      'production',
    type:        'mobile',
    repoUrl:     'https://github.com/BillyArroyo',
  }),
  new Project({
    id:          'ferreboom-web',
    title:       'Sitio Web Corporativo',
    description: 'Página web responsiva para empresa ferretera con catálogo dinámico, sistema de contacto y diseño orientado a conversión.',
    tech:        ['React', 'JavaScript', 'CSS3', 'Responsive'],
    featured:    false,
    status:      'production',
    type:        'web',
    repoUrl:     'https://github.com/BillyArroyo',
  }),
  new Project({
    id:          'lancenter-system',
    title:       'Sistema de Gestión Empresarial',
    description: 'Software con acceso por claves únicas para LanCenter. Módulos de usuarios, sesiones, facturación y reportes con arquitectura en capas.',
    tech:        ['C#', '.NET', 'SQL Server', 'WinForms'],
    featured:    false,
    status:      'completed',
    type:        'desktop',
  }),
  new Project({
    id:          'dotnet-suite',
    title:       'Suite de Aplicaciones .NET',
    description: 'Aplicaciones de escritorio: sistema para gimnasios con membresías y mini juegos interactivos con lógica OOP avanzada en C#.',
    tech:        ['C#', '.NET Framework', 'WinForms', 'OOP'],
    featured:    false,
    status:      'completed',
    type:        'desktop',
  }),
  new Project({
    id:          'wordpress-sites',
    title:       'Portafolios con WordPress',
    description: 'Sitios web personalizados en WordPress con temas a medida, plugins custom, optimización SEO y configuración de hosting.',
    tech:        ['WordPress', 'PHP', 'CSS', 'SEO'],
    featured:    false,
    status:      'completed',
    type:        'cms',
  }),
];

export const portfolioData = { developer, skillGroups, keySkills, experience, education, projects };

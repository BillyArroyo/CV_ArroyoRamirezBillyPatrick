/**
 * portfolio.js — Single source of truth para todos los datos del CV.
 * Basado en CV real de Billy Patrick Arroyo Ramírez (Jun 2026).
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
  bio: `Desarrollador Full Stack con experiencia real en producción. Construí desde cero la app B2B de FerreBoom (Google Play), desarrollé 33+ Cloud Functions en TypeScript para XULS Tech y fundé CP-Techs, mi agencia web. Stack principal: Flutter, React, Next.js, TypeScript, Firebase y Supabase. Inglés C1.`,
  typingRoles: [
    'Full Stack Developer',
    'Flutter & Dart Expert',
    'Fundador CP-Techs',
    'Mobile App Developer',
    'Backend Serverless Dev',
    'React / Next.js Dev',
  ],
});

// ─── Skill Groups ────────────────────────────────────────────────────────────
export const skillGroups = [
  new SkillGroup({
    name: 'Lenguajes',
    icon: 'code',
    skills: [
      new Skill({ name: 'Dart',           level: 92, highlight: true,  category: 'language' }),
      new Skill({ name: 'TypeScript',     level: 85, highlight: true,  category: 'language' }),
      new Skill({ name: 'JavaScript',     level: 85, highlight: false, category: 'language' }),
      new Skill({ name: 'C#',             level: 80, highlight: false, category: 'language' }),
      new Skill({ name: 'Python',         level: 70, highlight: false, category: 'language' }),
      new Skill({ name: 'SQL',            level: 75, highlight: false, category: 'language' }),
      new Skill({ name: 'HTML / CSS',     level: 85, highlight: false, category: 'language' }),
    ],
  }),
  new SkillGroup({
    name: 'Mobile',
    icon: 'smartphone',
    skills: [
      new Skill({ name: 'Flutter',              level: 92, highlight: true,  category: 'mobile' }),
      new Skill({ name: 'Firebase Auth',        level: 88, highlight: false, category: 'mobile' }),
      new Skill({ name: 'Cloud Firestore',      level: 88, highlight: true,  category: 'mobile' }),
      new Skill({ name: 'Cloud Functions',      level: 85, highlight: true,  category: 'mobile' }),
      new Skill({ name: 'Melos Monorepo',       level: 78, highlight: false, category: 'mobile' }),
      new Skill({ name: 'FCM',                  level: 80, highlight: false, category: 'mobile' }),
      new Skill({ name: 'Google Play',          level: 75, highlight: false, category: 'mobile' }),
    ],
  }),
  new SkillGroup({
    name: 'Web Frontend',
    icon: 'layout',
    skills: [
      new Skill({ name: 'React',          level: 82, highlight: true,  category: 'framework' }),
      new Skill({ name: 'Next.js',        level: 78, highlight: true,  category: 'framework' }),
      new Skill({ name: 'Tailwind CSS',   level: 82, highlight: false, category: 'framework' }),
      new Skill({ name: 'Zustand',        level: 80, highlight: false, category: 'framework' }),
      new Skill({ name: 'Vite',           level: 78, highlight: false, category: 'framework' }),
      new Skill({ name: 'Node.js',        level: 72, highlight: false, category: 'framework' }),
    ],
  }),
  new SkillGroup({
    name: 'Backend & APIs',
    icon: 'server',
    skills: [
      new Skill({ name: 'Cloud Functions (TS)', level: 85, highlight: true,  category: 'backend' }),
      new Skill({ name: 'Edge Functions (Deno)',level: 78, highlight: false, category: 'backend' }),
      new Skill({ name: 'REST APIs',            level: 85, highlight: false, category: 'backend' }),
      new Skill({ name: 'Zod',                  level: 80, highlight: false, category: 'backend' }),
      new Skill({ name: 'Firebase Admin SDK',   level: 85, highlight: false, category: 'backend' }),
      new Skill({ name: 'Dexie.js / IndexedDB', level: 72, highlight: false, category: 'backend' }),
    ],
  }),
  new SkillGroup({
    name: 'Bases de Datos',
    icon: 'database',
    skills: [
      new Skill({ name: 'Supabase (PostgreSQL)', level: 78, highlight: true,  category: 'database' }),
      new Skill({ name: 'Cloud Firestore',       level: 88, highlight: true,  category: 'database' }),
      new Skill({ name: 'MySQL',                 level: 75, highlight: false, category: 'database' }),
      new Skill({ name: 'SQL Server',            level: 75, highlight: false, category: 'database' }),
      new Skill({ name: 'Supabase Realtime',     level: 78, highlight: false, category: 'database' }),
    ],
  }),
  new SkillGroup({
    name: 'Herramientas & Otros',
    icon: 'tool',
    skills: [
      new Skill({ name: 'Git & GitHub',     level: 88, highlight: false, category: 'devops' }),
      new Skill({ name: 'Jira / Scrum',     level: 75, highlight: false, category: 'devops' }),
      new Skill({ name: 'Figma',            level: 80, highlight: false, category: 'devops' }),
      new Skill({ name: 'Unity (2D & 3D)', level: 72, highlight: false, category: 'devops' }),
      new Skill({ name: 'OBS / FFmpeg',     level: 70, highlight: false, category: 'devops' }),
      new Skill({ name: 'Inglés C1',        level: 85, highlight: true,  category: 'devops' }),
    ],
  }),
];

// ─── Key Skill Levels (sidebar bars) ────────────────────────────────────────
export const keySkills = [
  new Skill({ name: 'Flutter / Dart',            level: 92, category: 'mobile'    }),
  new Skill({ name: 'TypeScript / JavaScript',   level: 85, category: 'language'  }),
  new Skill({ name: 'Firebase / Cloud Functions',level: 88, category: 'backend'   }),
  new Skill({ name: 'React / Next.js',           level: 82, category: 'framework' }),
  new Skill({ name: 'Supabase / PostgreSQL',     level: 78, category: 'database'  }),
  new Skill({ name: 'UI/UX · Figma',            level: 80, category: 'design'    }),
];

// ─── Work Experience ─────────────────────────────────────────────────────────
export const experience = [
  new Experience({
    company:        'CP-Techs',
    role:           'Full Stack Developer & Fundador',
    from:           'Ene 2026',
    to:             null,
    current:        true,
    type:           'work',
    employmentType: 'Fundador',
    location:       'Huancayo, Perú',
    description:    'Fundé y dirijo mi propia agencia de desarrollo web para PYMES. Proyecto principal: FarmaLink, sistema B2B farmacéutico completo con Supabase Realtime y recibos anti-fraude SHA-256.',
    responsibilities: [
      'FarmaLink: 3 roles (cliente, vendedor, admin), catálogo de 500 productos en 68 laboratorios, carrito con Zustand',
      '7 Supabase Edge Functions con JWT y RLS; API tipada en frontend; recibos anti-fraude SHA-256 + GPS',
      'Supabase Realtime: pedidos en tiempo real con toasts/badges para vendedor y admin',
      'Generación de catálogo PDF comprimido (WebP, hasta 500 imgs, progress bar)',
      'La Ribera Digital Hub: plataforma Next.js + Supabase con streaming OBS en vivo',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Supabase', 'Edge Functions', 'Tailwind CSS', 'Zustand', 'Dexie.js'],
  }),
  new Experience({
    company:        'XULS Tech S.A.C.S.',
    role:           'Mobile & Backend Developer',
    from:           'Mar 2026',
    to:             'Jun 2026',
    current:        false,
    type:           'work',
    employmentType: 'Contrato',
    location:       'Huancayo, Perú',
    description:    'Migré la lógica de negocio de Firestore al backend serverless: 33+ Cloud Functions en TypeScript con validación Zod, Firebase Admin SDK y deploy gen1/gen2.',
    responsibilities: [
      '33+ funciones HTTP TypeScript con validación Zod y Firebase Admin SDK',
      'Flujo completo de crédito y cobranza: solicitud, aprobación/rechazo, validación de comprobantes con Storage',
      '9 endpoints HTTP para gestión de clientes: aprobación, reasignación masiva y línea de crédito',
      'Módulo de pedidos: 3 métodos de pago (YAPE, PLIN, transferencia) + notificaciones a 4 roles',
      'Sistema XulsPoints + correcciones en monorepo Flutter (Melos, packages core/data/ui)',
    ],
    tech: ['Cloud Functions', 'TypeScript', 'Firebase Admin', 'Zod', 'Flutter', 'Melos Monorepo'],
  }),
  new Experience({
    company:        'FerreBoom',
    role:           'Flutter Developer',
    from:           'Jun 2025',
    to:             'Mar 2026',
    current:        false,
    type:           'work',
    employmentType: 'Tiempo completo',
    location:       'Huancayo, Perú',
    description:    'Construí desde cero la app Flutter B2B para ferretería: catálogo con 5 tipos de precio por perfil de cliente, carrito y flujo completo de pedidos. Publicada en Google Play Store.',
    responsibilities: [
      'App B2B desde cero: auth dual (email + teléfono), catálogo con 5 tipos de precio por cliente',
      'Publicación en Google Play Store: signing, políticas y onboarding completo',
      'UX/UI completo: catálogo, detalle, carrito, historial y seguimiento en tiempo real',
      'Push notifications FCM: 2 canales diferenciados, gestión de tokens por usuario',
      'Force update con Firebase Remote Config: comparación semántica pub_semver',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'FCM', 'BLoC', 'Figma', 'Google Play'],
  }),
  new Experience({
    company:        'Prácticas Preprofesionales — Videojuegos',
    role:           'Unity Game Developer',
    from:           '2025',
    to:             '2025',
    current:        false,
    type:           'work',
    employmentType: 'Prácticas',
    location:       'Huancayo, Perú',
    description:    'Desarrollo de videojuegos 2D y 3D en Unity: mecánicas de disparo, spawning, boss fights, power-ups. Coordinación de equipo vía Slack.',
    responsibilities: [
      'Juegos 2D y 3D tipo shooter: mecánicas de disparo, movimiento, spawning y boss fights',
      'Animator Controller para transiciones, blending y eventos integrados con lógica C#',
      'Rigidbody2D/3D, Collider2D, Canvas UI (TextMeshPro, Sliders), Cinemachine',
      'Coordinación de equipo vía Slack: seguimiento de tareas y gestión de versiones',
    ],
    tech: ['Unity 2D & 3D', 'C#', 'Rigidbody2D', 'Cinemachine', 'Animator Controller', 'Particle System'],
  }),
  new Experience({
    company:        'Claro Perú (tec4biz)',
    role:           'Asesor Comercial',
    from:           'Ene 2025',
    to:             'Mar 2025',
    current:        false,
    type:           'work',
    employmentType: 'Tiempo completo',
    location:       'Huancayo, Perú',
    description:    'Gestión de cartera B2C y cierre de ventas de servicios de telecomunicaciones en entorno de alta presión con objetivos mensuales.',
    responsibilities: [
      'Gestión de cartera de clientes y cierre de ventas B2C de telecomunicaciones',
      'Manejo de objeciones, seguimiento de leads y atención al cliente presencial',
      'Trabajo en equipo orientado a resultados con objetivos mensuales',
    ],
    tech: ['Ventas B2C', 'Negociación', 'CRM', 'Atención al cliente'],
  }),
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education = [
  new Experience({
    company:  'Universidad Continental',
    role:     'Bachiller en Ingeniería de Sistemas e Informática',
    from:     '2021',
    to:       '2026',
    current:  false,
    type:     'education',
    location: 'Huancayo, Perú',
    description: 'Cursando el último ciclo académico. Graduación: mediados 2026. Tercer puesto en concurso de matemáticas a nivel regional (La Oroya). Bachillerato de secundaria en el 5to superior del Colegio Max Planck.',
    tech: ['Algoritmos y Estructuras de Datos', 'Ingeniería de Software', 'Bases de Datos', 'Redes y Comunicaciones', 'Gestión de Proyectos TI'],
  }),
];

// ─── Projects ────────────────────────────────────────────────────────────────
export const projects = [
  new Project({
    id:          'farmalink',
    title:       'FarmaLink — Sistema B2B Farmacéutico',
    description: 'Plataforma B2B para Canaán Farma: 3 roles (cliente, vendedor, admin), catálogo de 500 productos en 68 laboratorios, 7 Edge Functions con JWT y RLS, recibos anti-fraude SHA-256 + GPS, y pedidos en tiempo real vía Supabase Realtime.',
    tech:        ['React', 'TypeScript', 'Supabase', 'Edge Functions (Deno)', 'Tailwind CSS', 'Zustand', 'Dexie.js', '@react-pdf/renderer'],
    featured:    true,
    status:      'production',
    type:        'web',
    repoUrl:     'https://github.com/BillyArroyo',
  }),
  new Project({
    id:          'ferreboom-app',
    title:       'App Móvil FerreBoom',
    description: 'App B2B multiplataforma para ferretería: catálogo con 5 tipos de precio por perfil de cliente, carrito, pedidos en tiempo real, push notifications FCM y force update con Remote Config. Publicada en Google Play Store.',
    tech:        ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'FCM', 'BLoC', 'Google Play'],
    featured:    false,
    status:      'production',
    type:        'mobile',
    repoUrl:     'https://github.com/BillyArroyo',
  }),
  new Project({
    id:          'la-ribera-hub',
    title:       'La Ribera Digital Hub',
    description: 'Plataforma digital comunitaria para Iglesia Bautista La Ribera: directorio de talentos, hub de sermones, tablero de eventos y sistema de streaming en vivo con overlays OBS personalizados.',
    tech:        ['Next.js', 'Supabase', 'TypeScript', 'OBS', 'Streaming en vivo'],
    featured:    false,
    status:      'production',
    type:        'web',
    repoUrl:     'https://github.com/BillyArroyo',
  }),
  new Project({
    id:          'lancenter-system',
    title:       'Sistema de Gestión LanCenter',
    description: 'Software con acceso por claves únicas para LanCenter. Módulos de usuarios, sesiones, facturación y reportes con arquitectura en capas.',
    tech:        ['C#', '.NET', 'SQL Server', 'WinForms'],
    featured:    false,
    status:      'completed',
    type:        'desktop',
  }),
];

export const portfolioData = { developer, skillGroups, keySkills, experience, education, projects };

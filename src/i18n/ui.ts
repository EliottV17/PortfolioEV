export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.about': 'about',
    'nav.experience': 'experience',
    'nav.projects': 'projects',
    'nav.skills': 'skills',
    'nav.contact': 'contact',
    'about.eyebrow': "// hello, i'm",
    'about.role': 'Backend Developer',
    'about.bio':
      'Focused on building reliable backend applications and efficient APIs. Experienced in developing robust server-side logic and microservices, combined with a solid foundation in React for frontend integration.',
    'about.location': '⌁ based in Perú',
    'about.status': '◷ open to new projects',

    'exp.item1.date': '2026 — now',
    'exp.item1.role': 'Independent · Backend Developer',
    'exp.item1.desc':
      'Developing personal and freelance backend projects, focusing on API design, database management, and asynchronous tasks.',

    'exp.item2.date': 'April 2026 — August 2026',
    'exp.item2.role': 'Meevent PE · Backend Developer (Project Collaborator)',
    'exp.item2.desc':
      'Optimized server-side logic and service architecture, reducing API response times by 30% and implementing automated tests to ensure system stability.',

    'exp.item3.date': 'Jul 2025 — Dec 2025',
    'exp.item3.role': 'Simply Technologies MX · Frontend Developer (Intern)',
    'exp.item3.desc':
      'Built responsive web interfaces and maintained reusable UI components using React, TypeScript, and modern state management.',

    'projects.sentinel.detail':
      'Real-time asynchronous monitoring system built to track service availability and performance.',
    'projects.gymBuddy.detail':
      'Location-based backend platform using PostGIS to connect athletes and workout spaces nearby.',

    'projects.viewRepo': 'View repository on GitHub for',
    'skills.languages': 'Languages & Frameworks',
    'skills.databases': 'Databases',
    'skills.architecture': 'APIs & Architecture',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tagArchitecture': 'Architecture',
    'skills.designPattern': 'Design Patterns',
    'contact.copy':
      "Do you have a project in mind or are you looking for a backend developer? Let's talk.",
    'contact.network': 'Network',
    'contact.sysInfo': 'System Info',
    'contact.locationLabel': 'Location:',
    'contact.locationValue': 'Lima, Callao (UTC-5)',
    'contact.statusLabel': 'Status:',
    'contact.statusValue': 'Open to new projects',
    'contact.cvEnTitle': 'Download English Resume',
    'contact.cvEsTitle': 'Download Spanish Resume',
  },
  es: {
    'nav.about': 'sobre mí',
    'nav.experience': 'experiencia',
    'nav.projects': 'proyectos',
    'nav.skills': 'habilidades',
    'nav.contact': 'contacto',
    'about.eyebrow': '// hola, soy',
    'about.role': 'Desarrollador Backend',
    'about.bio':
      'Enfocado en construir aplicaciones backend confiables y APIs eficientes. Experiencia en el desarrollo de lógica de servidor robusta y microservicios, combinada con una base sólida en React para la integración con el frontend.',
    'about.location': '⌁ ubicado en Perú',
    'about.status': '◷ abierto a nuevos proyectos',

    'exp.item1.date': '2026 — presente',
    'exp.item1.role': 'Independiente · Desarrollador Backend',
    'exp.item1.desc':
      'Desarrollo de proyectos independientes y backend, enfocado en el diseño de APIs, gestión de bases de datos y tareas asíncronas.',

    'exp.item2.date': 'Abril 2026 — Agosto 2026',
    'exp.item2.role': 'Meevent PE · Desarrollador Backend (Colaborador)',
    'exp.item2.desc':
      'Optimización de la lógica del servidor y arquitectura de servicios, reduciendo los tiempos de respuesta de la API en un 30% e implementando pruebas automatizadas para asegurar la estabilidad del sistema.',

    'exp.item3.date': 'Jul 2025 — Dic 2025',
    'exp.item3.role':
      'Simply Technologies MX · Desarrollador Frontend (Practicante)',
    'exp.item3.desc':
      'Desarrollo de interfaces web responsivas y mantenimiento de componentes de UI reutilizables utilizando React, TypeScript y gestión de estado.',

    'projects.sentinel.detail':
      'Sistema de monitoreo asíncrono en tiempo real diseñado para rastrear la disponibilidad y rendimiento de servicios.',
    'projects.gymBuddy.detail':
      'Plataforma backend basada en geolocalización que utiliza PostGIS para conectar atletas y emparejar espacios de entrenamiento cercanos.',

    'projects.viewRepo': 'Ver repositorio en GitHub de',
    'skills.languages': 'Lenguajes & Frameworks',
    'skills.databases': 'Bases de datos',
    'skills.architecture': 'APIs & Arquitectura',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tagArchitecture': 'Arquitectura',
    'skills.designPattern': 'Design Patterns',
    'contact.copy':
      '¿Tienes un proyecto en mente o buscas un desarrollador backend? Hablemos.',
    'contact.network': 'Redes',
    'contact.sysInfo': 'Información del Sistema',
    'contact.locationLabel': 'Ubicación:',
    'contact.locationValue': ' Lima, Callao (UTC-5)',
    'contact.statusLabel': 'Estado:',
    'contact.statusValue': 'Abierto a nuevos proyectos',
    'contact.cvEnTitle': 'Descargar CV en inglés',
    'contact.cvEsTitle': 'Descargar CV en español',
  },
} as const;
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

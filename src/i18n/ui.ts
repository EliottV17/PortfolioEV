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
    'about.role': 'Backend Software Engineer',
    'about.bio':
      'Backend engineer focused on building resilient systems. I specialize in developing concurrent execution engines in Go and structured APIs with NestJS, relying on PostgreSQL as the core source of truth, while keeping a solid React foundation for end-to-end integration.',
    'about.location': '⌁ based in Peru',
    'about.status': '◷ open to new projects',

    'exp.item1.date': '2026 — now',
    'exp.item1.role': 'Independent · Backend Software Engineer',
    'exp.item1.desc':
      'Developing personal and freelance backend projects, focusing on API design, database management, and asynchronous tasks.',

    'exp.item2.date': 'April 2026 — August 2026',
    'exp.item2.role': 'Meevent PE · Backend Developer (Project Collaborator)',
    'exp.item2.desc':
      'Optimized server-side logic and service architecture, reducing API response times by 30% and implementing automated tests to ensure system stability.',

    'exp.item3.date': 'July 2025 — December 2025',
    'exp.item3.role': 'Simply Technologies MX · Frontend Developer (Intern)',
    'exp.item3.desc':
      'Built responsive web interfaces and maintained reusable UI components using React, TypeScript, and modern state management.',

    'projects.sentinel.detail':
      'Distributed uptime monitoring platform (FastAPI + Go). Benchmarked to process 5,000 concurrent services using <50MB RAM and a strictly bounded 25-connection DB pool. Features FSM-based alerting to reduce notification noise by 99%.',
    'projects.gymBuddy.detail':
      'Engineered a high-performance matching engine utilizing PostGIS to resolve and optimize complex geospatial queries for low-latency proximity searches.',

    'projects.viewRepo': 'View repository on GitHub for',
    'skills.languages': 'Stack',
    'skills.databases': 'Databases',
    'skills.architecture': 'APIs & Architecture',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tagArchitecture': 'Architecture',
    'skills.microservices': 'Microservices',
    'skills.tools': 'Tools',
    'skills.designPattern': 'Design Patterns',
    'contact.copy':
      "Do you have a project in mind or are you looking for a backend software engineer? Let's talk.",
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
    'about.role': 'Ingeniero de Software Backend',
    'about.bio':
      'Ingeniero backend enfocado en construir sistemas resilientes. Me especializo en desarrollar motores de ejecución concurrente en Go y APIs estructuradas con NestJS, usando PostgreSQL como fuente de verdad, manteniendo una base sólida en React para integraciones end-to-end.',
    'about.location': '⌁ ubicado en Perú',
    'about.status': '◷ abierto a nuevos proyectos',

    'exp.item1.date': '2026 — presente',
    'exp.item1.role': 'Independiente · Ingeniero de Software Backend',
    'exp.item1.desc':
      'Desarrollo de proyectos personales y freelance de backend, enfocado en el diseño de APIs, gestión de bases de datos y tareas asíncronas.',

    'exp.item2.date': 'Abril 2026 — Agosto 2026',
    'exp.item2.role': 'Meevent PE · Desarrollador Backend (Colaborador)',
    'exp.item2.desc':
      'Optimización de la lógica del servidor y arquitectura de servicios, reduciendo los tiempos de respuesta de la API en un 30% e implementando pruebas automatizadas para asegurar la estabilidad del sistema.',

    'exp.item3.date': 'Julio 2025 — Diciembre 2025',
    'exp.item3.role':
      'Simply Technologies MX · Desarrollador Frontend (Practicante)',
    'exp.item3.desc':
      'Desarrollo de interfaces web responsivas y mantenimiento de componentes de UI reutilizables utilizando React, TypeScript y gestión de estado moderna.',

    'projects.sentinel.detail':
      'Plataforma distribuida de observabilidad (FastAPI + Go). Validada procesando 5,000 servicios concurrentes con <50MB de RAM y un pool acotado de 25 conexiones a BD. Incluye alertas por máquina de estados (FSM) que reducen el ruido operativo en un 99%.',
    'projects.gymBuddy.detail':
      'Motor de emparejamiento de alto rendimiento que utiliza PostGIS para resolver y optimizar consultas geoespaciales complejas en búsquedas por proximidad de baja latencia.',

    'projects.viewRepo': 'Ver repositorio en GitHub de',
    'skills.languages': 'Stack',
    'skills.databases': 'Bases de datos',
    'skills.architecture': 'APIs y arquitectura',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tagArchitecture': 'Arquitectura',
    'skills.microservices': 'Microservicios',
    'skills.tools': 'Herramientas',
    'skills.designPattern': 'Patrones de diseño',
    'contact.copy':
      '¿Tienes un proyecto en mente o buscas un ingeniero de software backend? Hablemos.',
    'contact.network': 'Redes',
    'contact.sysInfo': 'Información del sistema',
    'contact.locationLabel': 'Ubicación:',
    'contact.locationValue': 'Lima, Callao (UTC-5)',
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

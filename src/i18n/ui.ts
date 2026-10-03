export const defaultLang = 'en';

export const ui = {
  en: {
    'page.title': 'Eliott Velarde — Software Developer',
    'page.description':
      "Eliott Velarde's Portfolio. Software Developer focused on APIs, backend systems, system design, and software architecture.",
    'nav.about': 'about',
    'nav.experience': 'experience',
    'nav.projects': 'projects',
    'nav.skills': 'skills',
    'nav.contact': 'contact',
    'about.eyebrow': "// hello, i'm",
    'about.role': 'Software Developer',
    'about.bio':
      'Software Developer focused on building resilient systems. I specialize in developing concurrent execution engines in Go and structured APIs with NestJS, optimizing data modeling and persistence in PostgreSQL, while keeping a solid React foundation for end-to-end integration.',
    'about.location': '⌁ based in Peru',
    'about.status': '◷ open to new projects',

    'exp.item1.date': '2026 — now',
    'exp.item1.role': 'Independent · Software Developer',
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
      'Distributed uptime and latency monitoring platform (NestJS + Go). Benchmarked to process 5,000 concurrent services using <50MB RAM and a strictly bounded 25-connection DB pool. Features FSM-based alerting to reduce notification noise by 99%.',
    'projects.gymBuddy.detail':
      'Engineered a high-performance matching engine utilizing PostGIS to resolve and optimize complex geospatial queries for low-latency proximity searches.',
    'projects.tenantInbox.detail':
      'Real-time web platform that centralizes tenant messages received via form and webhook. An AI agent classifies them by category and urgency, writes a summary and drafts a reply that a person reviews and approves before sending.',
    'projects.sentinel.highlight1':
      'Decoupled runtimes: Go worker (pgx pool) + NestJS REST API',
    'projects.sentinel.highlight2':
      'Pluggable checker registry: new probe protocols without touching the polling loop',
    'projects.gymBuddy.highlight1':
      'Geospatial discovery: ordered by real distance with PostGIS ST_Distance, excluding already-swiped users',
    'projects.gymBuddy.highlight2':
      'Race-safe matching: composite unique indexes on swipes and matches, duplicate swipes handled via 409',
    'projects.tenantInbox.highlight1':
      'State-machine pipeline: idempotent transitions (new → classifying → classified | failed)',
    'projects.tenantInbox.highlight2':
      'Webhook with shared secret and constant-time comparison; daily classification cap',
    'projects.tenantInbox.highlight3':
      'Zod as single source of truth: validates model output and generates the JSON Schema',
    'projects.project4.detail':
      'Cloud-native API gateway and telemetry pipeline featuring automated tracing, rate limiting, and zero-downtime blue/green deployment orchestration.',
    'projects.more.singular': '[ +1 more · open :telescope ]',
    'projects.more.plural': '[ +{count} more · open :telescope ]',
    'projects.more.aria':
      'Open Telescope to view remaining projects, starting with {name}',
    'projects.row.aria': '{name} - Inspect in Telescope',
    'projects.video.aria': '{name} demo video',
    'projects.video.link': '[▶ Video]',
    'projects.github.link': '[ GitHub ↗ ]',
    'telescope.modal.aria': 'Telescope Projects Picker',
    'telescope.close.aria': 'Close modal',
    'telescope.projects.title': 'projects',
    'telescope.search.placeholder': 'search projects...',
    'telescope.search.aria': 'Filter projects',
    'telescope.video.link': '[video]',
    'telescope.github.link': '[github]',
    'telescope.diagram.aria': 'Architecture diagram',
    'telescope.diagram.project.aria': '{name} architecture diagram',

    'skills.languages': 'Stack',
    'skills.databases': 'Databases',
    'skills.architecture': 'APIs & Architecture',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tagArchitecture': 'Architecture',
    'skills.microservices': 'Microservices',
    'skills.tools': 'Tools',
    'contact.copy':
      "Do you have a project in mind or are you looking for a software developer? Let's talk.",
    'contact.network': 'Network',
    'contact.sysInfo': 'System Info',
    'contact.locationLabel': 'Location:',
    'contact.locationValue': 'Lima, Peru (UTC-5)',
    'contact.statusLabel': 'Status:',
    'contact.statusValue': 'Open to new projects',
    'contact.cvEnTitle': 'Download English Resume',
    'contact.cvEsTitle': 'Download Spanish Resume',
  },
  es: {
    'page.title': 'Eliott Velarde — Desarrollador de Software',
    'page.description':
      'Portafolio de Eliott Velarde. Software Developer enfocado en APIs, sistemas backend, diseño de sistemas y arquitectura de software',
    'nav.about': 'sobre mí',
    'nav.experience': 'experiencia',
    'nav.projects': 'proyectos',
    'nav.skills': 'habilidades',
    'nav.contact': 'contacto',
    'about.eyebrow': '// hola, soy',
    'about.role': 'Software Developer',
    'about.bio':
      'Software Developer enfocado en construir sistemas resilientes. Me especializo en desarrollar motores de ejecución concurrente en Go y APIs estructuradas con NestJS, optimizando la persistencia y el modelado de datos en PostgreSQL, manteniendo una base sólida en React para integraciones end-to-end.',
    'about.location': '⌁ ubicado en Perú',
    'about.status': '◷ abierto a nuevos proyectos',

    'exp.item1.date': '2026 — presente',
    'exp.item1.role': 'Independiente · Software Developer',
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
      'Plataforma distribuida de monitoreo de disponibilidad y latencia (NestJS + Go). Validada procesando 5,000 servicios concurrentes con <50MB de RAM y un pool acotado de 25 conexiones a BD. Incluye alertas por máquina de estados (FSM) que reducen el ruido operativo en un 99%.',
    'projects.gymBuddy.detail':
      'Motor de emparejamiento de alto rendimiento que utiliza PostGIS para resolver y optimizar consultas geoespaciales complejas en búsquedas por proximidad de baja latencia.',
    'projects.tenantInbox.detail':
      'Plataforma web en tiempo real que centraliza los mensajes de inquilinos recibidos por formulario y webhook. Un agente de IA los clasifica por categoría y urgencia, genera un resumen y propone un borrador de respuesta que una persona revisa y aprueba antes de enviarlo.',
    'projects.sentinel.highlight1':
      'Runtimes desacoplados: worker en Go (pool pgx) + API REST en NestJS',
    'projects.sentinel.highlight2':
      'Registry de checkers: nuevos protocolos de sondeo sin tocar el loop de polling',
    'projects.gymBuddy.highlight1':
      'Descubrimiento geoespacial: orden por distancia real con ST_Distance de PostGIS, excluyendo usuarios ya swipeados',
    'projects.gymBuddy.highlight2':
      'Matching seguro ante concurrencia: índices únicos compuestos en swipes y matches, swipes duplicados resueltos con 409',
    'projects.tenantInbox.highlight1':
      'Pipeline como máquina de estados: transiciones idempotentes (new → classifying → classified | failed)',
    'projects.tenantInbox.highlight2':
      'Webhook con secreto compartido y comparación en tiempo constante; tope diario de clasificaciones',
    'projects.tenantInbox.highlight3':
      'Zod como fuente única de verdad: valida la respuesta del modelo y genera el JSON Schema',
    'projects.project4.detail':
      'API gateway cloud-native y pipeline de telemetría con trazabilidad distribuida automatizada, rate limiting y despliegues blue/green sin interrupciones.',
    'projects.more.singular': '[ +1 más · abrir :telescope ]',
    'projects.more.plural': '[ +{count} más · abrir :telescope ]',
    'projects.more.aria':
      'Abrir Telescope para ver los proyectos restantes, comenzando por {name}',
    'projects.row.aria': '{name} - Inspeccionar en Telescope',
    'projects.video.aria': 'Video de demostración de {name}',
    'projects.video.link': '[▶ Video]',
    'projects.github.link': '[ GitHub ↗ ]',
    'telescope.modal.aria': 'Selector de proyectos de Telescope',
    'telescope.close.aria': 'Cerrar modal',
    'telescope.projects.title': 'proyectos',
    'telescope.search.placeholder': 'buscar proyecto...',
    'telescope.search.aria': 'Filtrar proyectos',
    'telescope.video.link': '[video]',
    'telescope.github.link': '[GitHub]',
    'telescope.diagram.aria': 'Diagrama de arquitectura',
    'telescope.diagram.project.aria': 'Diagrama de arquitectura de {name}',

    'skills.languages': 'Stack',
    'skills.databases': 'Bases de datos',
    'skills.architecture': 'APIs y arquitectura',
    'skills.cloud': 'Cloud & DevOps',
    'skills.tagArchitecture': 'Arquitectura',
    'skills.microservices': 'Microservicios',
    'skills.tools': 'Herramientas',
    'contact.copy':
      '¿Tienes un proyecto en mente o buscas un software developer? Hablemos.',
    'contact.network': 'Redes',
    'contact.sysInfo': 'Información del sistema',
    'contact.locationLabel': 'Ubicación:',
    'contact.locationValue': 'Lima, Perú (UTC-5)',
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

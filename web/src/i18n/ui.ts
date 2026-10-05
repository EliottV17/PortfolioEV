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
        'projects.project4.detail':
      'Cloud-native API gateway and telemetry pipeline featuring automated tracing, rate limiting, and zero-downtime blue/green deployment orchestration.',
    'projects.more.singular': '[ +1 more · open :telescope ]',
    'projects.more.plural': '[ +{count} more · open :telescope ]',
    'projects.more.aria':
      'Open Telescope to view remaining projects, starting with {name}',
    'projects.row.aria': '{name} - Inspect in Telescope',
    'projects.video.aria': '{name} demo video',
    'projects.video.link': '[▶ Video]',
    'projects.web.aria': '{name} live demo',
    'projects.web.link': '[ Web ↗ ]',
    'projects.github.link': '[ GitHub ↗ ]',
    'telescope.modal.aria': 'Telescope Projects Picker',
    'telescope.close.aria': 'Close modal',
    'telescope.projects.title': 'projects',
    'telescope.search.placeholder': 'search projects...',
    'telescope.search.aria': 'Filter projects',
    'telescope.web.link': '[ Web ↗ ]',
    'telescope.video.link': '[▶ Video]',
    'telescope.github.link': '[ GitHub ↗ ]',
    'telescope.diagram.aria': 'Architecture diagram',
    'telescope.diagram.project.aria': '{name} architecture diagram',

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
        'projects.project4.detail':
      'API gateway cloud-native y pipeline de telemetría con trazabilidad distribuida automatizada, rate limiting y despliegues blue/green sin interrupciones.',
    'projects.more.singular': '[ +1 más · abrir :telescope ]',
    'projects.more.plural': '[ +{count} más · abrir :telescope ]',
    'projects.more.aria':
      'Abrir Telescope para ver los proyectos restantes, comenzando por {name}',
    'projects.row.aria': '{name} - Inspeccionar en Telescope',
    'projects.video.aria': 'Video de demostración de {name}',
    'projects.video.link': '[▶ Video]',
    'projects.web.aria': 'Sitio web de {name}',
    'projects.web.link': '[ Web ↗ ]',
    'projects.github.link': '[ GitHub ↗ ]',
    'telescope.modal.aria': 'Selector de proyectos de Telescope',
    'telescope.close.aria': 'Cerrar modal',
    'telescope.projects.title': 'proyectos',
    'telescope.search.placeholder': 'buscar proyecto...',
    'telescope.search.aria': 'Filtrar proyectos',
    'telescope.web.link': '[ Web ↗ ]',
    'telescope.video.link': '[▶ Video]',
    'telescope.github.link': '[ GitHub ↗ ]',
    'telescope.diagram.aria': 'Diagrama de arquitectura',
    'telescope.diagram.project.aria': 'Diagrama de arquitectura de {name}',

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

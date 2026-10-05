import projectsYaml from '../../../content/projects.yaml?raw';
import { parse } from 'yaml';

export type ProjectLocale = 'en' | 'es';

interface LocalizedCopy {
  detail: string;
  highlights: string[];
}

interface ProjectContent {
  id: string;
  name: string;
  links: {
    github: string;
    video?: string;
    web?: string;
  };
  stack: string[];
  color: string;
  techIcon: string;
  filename?: string;
  diagram: string;
  content: Record<ProjectLocale, LocalizedCopy>;
}

interface ProjectsContent {
  projects: ProjectContent[];
}

const projectsContent = parse(projectsYaml) as ProjectsContent;

export function getProjects(locale: ProjectLocale) {
  return projectsContent.projects.map((project) => {
    const copy = project.content[locale];
    return {
      id: project.id,
      name: project.name,
      url: project.links.github,
      videoUrl: project.links.video,
      webUrl: project.links.web,
      filename: project.filename,
      detail: copy.detail,
      stack: project.stack.join(' · '),
      color: project.color,
      techIcon: project.techIcon,
      diagram: project.diagram,
      highlights: copy.highlights,
    };
  });
}

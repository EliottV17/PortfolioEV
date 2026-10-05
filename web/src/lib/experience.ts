import experienceYaml from '../../../content/experience.yaml?raw';
import { parse } from 'yaml';

export type ExperienceLocale = 'en' | 'es';

interface LocalizedExperience {
  date: string;
  role: string;
  description: string;
}

interface ExperienceEntry {
  content: Record<ExperienceLocale, LocalizedExperience>;
}

interface ExperienceContent {
  experiences: ExperienceEntry[];
}

const experienceContent = parse(experienceYaml) as ExperienceContent;

export function getExperience(locale: ExperienceLocale) {
  return experienceContent.experiences.map(
    (experience) => experience.content[locale],
  );
}

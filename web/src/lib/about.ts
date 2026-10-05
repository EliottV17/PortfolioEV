import aboutYaml from '../../../content/about.yaml?raw';
import { parse } from 'yaml';

export type AboutLocale = 'en' | 'es';

interface LocalizedProfile {
  eyebrow: string;
  role: string;
  bio: string;
  location: string;
  status: string;
}

interface AboutContent {
  profile: {
    name: string;
    content: Record<AboutLocale, LocalizedProfile>;
  };
}

const aboutContent = parse(aboutYaml) as AboutContent;

export function getAbout(locale: AboutLocale) {
  return aboutContent.profile.content[locale];
}

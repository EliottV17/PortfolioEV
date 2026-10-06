import contactYaml from '../../../content/contact.yaml?raw';
import { parse } from 'yaml';

export type ContactLocale = 'en' | 'es';

interface ContactSocial {
  id: string;
  name: string;
  url: string;
}

interface LocalizedContact {
  copy: string;
  location: string;
  status: string;
}

interface Resume {
  path: string;
  filename: string;
}

interface ContactContent {
  email: string;
  socials: {
    linkedin: ContactSocial;
    github: ContactSocial;
  };
  content: Record<ContactLocale, LocalizedContact>;
  resumes: Record<ContactLocale, Resume>;
}

const contactContent = parse(contactYaml) as ContactContent;

export function getContact(locale: ContactLocale) {
  return {
    email: contactContent.email,
    socials: contactContent.socials,
    ...contactContent.content[locale],
    resume: contactContent.resumes[locale],
  };
}

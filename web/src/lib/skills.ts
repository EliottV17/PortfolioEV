import skillsYaml from '../../../content/skills.yaml?raw';
import { parse } from 'yaml';

export type SkillsLocale = 'en' | 'es';

type SkillsText = string | Record<SkillsLocale, string>;

interface SkillGroup {
  name: SkillsText;
  items: SkillsText[];
}

interface SkillCategory {
  category: SkillsText;
  groups: SkillGroup[];
}

interface SkillsContent {
  skills: SkillCategory[];
}

const skillsContent = parse(skillsYaml) as SkillsContent;

function resolveText(text: SkillsText, locale: SkillsLocale) {
  return typeof text === 'string' ? text : text[locale];
}

export function getSkills(locale: SkillsLocale) {
  return skillsContent.skills.map((category) => ({
    category: resolveText(category.category, locale),
    groups: category.groups.map((group) => ({
      name: resolveText(group.name, locale),
      items: group.items.map((item) => resolveText(item, locale)),
    })),
  }));
}

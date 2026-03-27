import en from './en';
import es from './es';
import fr from './fr';
import de from './de';
import it from './it';
import pt from './pt';
import ru from './ru';

export const languages = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Português',
  ru: 'Русский',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const translations: Record<Lang, typeof en> = { en, es, fr, de, it, pt, ru };

export function t(lang: Lang) {
  return translations[lang] || translations[defaultLang];
}

export function langPrefix(lang: Lang): string {
  return lang === defaultLang ? '' : `/${lang}`;
}

export function localizedUrl(lang: Lang, path: string): string {
  const prefix = langPrefix(lang);
  return `${prefix}${path}`;
}

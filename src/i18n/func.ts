import { LOCALES, DEFAULT_LOCALE, TRANSLATIONS, type Locale } from './trans';

const getStaticPaths = () => {
  return LOCALES.map((locale) => ({ params: { lang: locale } }));
}

const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/');

  if (LOCALES.includes(lang)) return lang;

  return DEFAULT_LOCALE;
};

const generateLocalizedPath = (path: string, lang: string) => {
  return `/${lang}${path === '/' ? '' : path}`;
};

const getAlternateLangs = (currentLang: string, currentPath: string) => {
  return LOCALES
    .filter((lang) => lang !== currentLang)
    .map((lang) => ({
      lang,
      url: generateLocalizedPath(currentPath, lang),
    }));
};

const useTranslations = (lang: Locale) => TRANSLATIONS[lang];

export { getStaticPaths, getLangFromUrl, generateLocalizedPath, getAlternateLangs, useTranslations };


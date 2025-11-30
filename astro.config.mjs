// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { LOCALES, DEFAULT_LOCALE } from './src/i18n/trans';

// https://astro.build/config
export default defineConfig({
  site: 'https://bezpiecznedzieckowsieci.pl/',
  integrations: [mdx(), sitemap(), react()],
  i18n: { locales: LOCALES, defaultLocale: DEFAULT_LOCALE, routing: { prefixDefaultLocale: true } },
  vite: { plugins: [tailwindcss()] },
});

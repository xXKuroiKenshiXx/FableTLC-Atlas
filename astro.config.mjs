import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  output: 'static',
  site: 'https://xXKuroiKenshiXx.github.io',
  base: isGitHubPages ? '/FableTLC-Atlas' : '/',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] }
});

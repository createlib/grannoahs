import { defineConfig } from 'astro/config';
import tailwindcore from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcore()]
  }
});
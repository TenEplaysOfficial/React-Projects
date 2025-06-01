import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://reactprojectsbytene.vercel.app/',
      dynamicRoutes: ['/', '/counter', '/countdown-newyear'],
    }),
  ],
});

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  // options "root" & "resolve" has been added for Bootstrap integration
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  // option "server" has been added for running devserver inside docker-container
  server: {
    host: '0.0.0.0',
    watch: {
      usePolling: true
    },
  },
});

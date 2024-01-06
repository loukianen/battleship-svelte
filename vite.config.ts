import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	// option "server" has been added for running devserver inside docker-container
	server: {
		host: '0.0.0.0',
		watch: {
			usePolling: true
		},
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

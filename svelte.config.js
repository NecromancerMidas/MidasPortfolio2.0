import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Use Vite's preprocessing options
	preprocess: vitePreprocess(),

	kit: {
		// Configure the adapter-static for static site deployment
		adapter: adapter({
			// Directory to output the build
			pages: 'build',
			assets: 'build',
			// For single-page apps, use 'index.html' as the fallback
			fallback: null, // Change to 'index.html' if needed
		}),
		paths: {
			// Base path, update this if deploying to a subdirectory
			base: '',
		}
	}
};

export default config;

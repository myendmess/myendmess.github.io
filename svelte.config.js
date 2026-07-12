import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// 100% static output for GitHub Pages (user site served from the repo root).
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			strict: true
		})
	}
};

export default config;

/**
 * Scroll-reveal action (port of the v1 IntersectionObserver behavior).
 * Usage: <div use:reveal> — pairs with the .reveal / .in-view CSS in app.css.
 */
export function reveal(node) {
	node.classList.add('reveal');

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduceMotion || !('IntersectionObserver' in window)) {
		node.classList.add('in-view');
		return;
	}

	const io = new IntersectionObserver(
		(entries, obs) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('in-view');
					obs.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);
	io.observe(node);

	return {
		destroy() {
			io.disconnect();
		}
	};
}

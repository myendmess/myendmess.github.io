<script>
	import '../app.css';
	import { i18n, t, LANGS } from '$lib/i18n.svelte.js';
	import { reveal } from '$lib/reveal.js';

	let { children } = $props();

	let menuOpen = $state(false);
	let theme = $state('dark');
	let canvasEl = $state(null);
	const year = new Date().getFullYear();

	// After hydration: restore saved language and sync theme state
	// (the inline script in app.html already applied data-theme pre-paint).
	$effect(() => {
		i18n.init();
		theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		if (theme === 'light') {
			document.documentElement.setAttribute('data-theme', 'light');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
		try {
			localStorage.setItem('theme', theme);
		} catch {
			/* storage unavailable */
		}
	}

	// Constellation background (port of v1). Skipped on reduced-motion
	// and small/touch screens to save battery and paint cost.
	$effect(() => {
		const canvas = canvasEl;
		if (!canvas) return;
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion || window.innerWidth <= 760) return;

		const ctx = canvas.getContext('2d');
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const COUNT = 46;
		const LINK = 150;
		const SPEED = 0.18;
		let w, h, points, raf;

		function size() {
			w = canvas.clientWidth;
			h = canvas.clientHeight;
			canvas.width = w * dpr;
			canvas.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}

		function seed() {
			points = [];
			for (let i = 0; i < COUNT; i++) {
				points.push({
					x: Math.random() * w,
					y: Math.random() * h,
					vx: (Math.random() - 0.5) * SPEED,
					vy: (Math.random() - 0.5) * SPEED
				});
			}
		}

		function frame() {
			ctx.clearRect(0, 0, w, h);
			for (let i = 0; i < points.length; i++) {
				const p = points[i];
				p.x += p.vx;
				p.y += p.vy;
				if (p.x < 0 || p.x > w) p.vx *= -1;
				if (p.y < 0 || p.y > h) p.vy *= -1;

				ctx.beginPath();
				ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
				ctx.fillStyle = 'rgba(251, 191, 36, 0.7)';
				ctx.fill();

				for (let j = i + 1; j < points.length; j++) {
					const q = points[j];
					const dx = p.x - q.x;
					const dy = p.y - q.y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < LINK) {
						ctx.beginPath();
						ctx.moveTo(p.x, p.y);
						ctx.lineTo(q.x, q.y);
						ctx.strokeStyle = 'rgba(251, 146, 60,' + 0.16 * (1 - dist / LINK) + ')';
						ctx.lineWidth = 1;
						ctx.stroke();
					}
				}
			}
			raf = requestAnimationFrame(frame);
		}

		function start() {
			size();
			seed();
			cancelAnimationFrame(raf);
			frame();
		}

		start();

		const onVisibility = () => {
			if (document.hidden) cancelAnimationFrame(raf);
			else frame();
		};
		let resizeTimer;
		const onResize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(start, 200);
		};
		document.addEventListener('visibilitychange', onVisibility);
		window.addEventListener('resize', onResize);

		return () => {
			cancelAnimationFrame(raf);
			clearTimeout(resizeTimer);
			document.removeEventListener('visibilitychange', onVisibility);
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (menuOpen = false)} />

<!-- Decorative background: grid + neon glows + constellation -->
<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
	<div class="bg-grid absolute inset-0"></div>
	<div
		class="absolute -top-32 right-[-10%] h-[30rem] w-[30rem] rounded-full blur-3xl"
		style="background: var(--t-glow-1)"
	></div>
	<div
		class="absolute top-[40%] left-[-12%] h-[26rem] w-[26rem] rounded-full blur-3xl"
		style="background: var(--t-glow-2)"
	></div>
	<canvas bind:this={canvasEl} class="absolute inset-0 h-full w-full"></canvas>
</div>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-on-accent"
>
	{@html t('nav.skip')}
</a>

<header class="sticky top-0 z-40 border-b border-line bg-page/80 backdrop-blur-md">
	<div class="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-5">
		<a href="/" class="flex items-center gap-2.5" aria-label="Mohamed Boujnane — home">
			<span class="glass grid h-8 w-8 shrink-0 place-items-center font-mono text-sm font-bold sm:h-9 sm:w-9">
				<span class="grad">MB</span>
			</span>
			<span class="hidden font-semibold tracking-tight sm:inline">Mohamed&nbsp;Boujnane</span>
		</a>

		<nav class="hidden items-center gap-7 md:flex" aria-label="Primary">
			<a href="#stack" class="text-sm font-medium text-fg-soft transition-colors hover:text-accent">Stack</a>
			<a href="#experience" class="text-sm font-medium text-fg-soft transition-colors hover:text-accent"
				>{t('nav.exp')}</a
			>
			<a href="#projects" class="text-sm font-medium text-fg-soft transition-colors hover:text-accent"
				>{t('nav.proj')}</a
			>
			<a
				href="#contact"
				class="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-2"
				>{t('nav.contact')}</a
			>
		</nav>

		<div class="flex items-center gap-1.5">
			<div class="glass flex items-center gap-0.5 p-0.5" role="group" aria-label="Language">
				{#each LANGS as lang (lang.code)}
					<button
						type="button"
						lang={lang.code === 'ja' ? 'ja' : undefined}
						class="rounded-lg px-1 py-1 font-mono text-[10px] whitespace-nowrap transition-colors sm:px-2 sm:text-xs {i18n.lang === lang.code
							? 'bg-accent font-semibold text-on-accent'
							: 'text-fg-soft hover:text-accent'}"
						aria-pressed={i18n.lang === lang.code}
						onclick={() => i18n.set(lang.code)}
					>
						{lang.label}
					</button>
				{/each}
			</div>

			<button
				type="button"
				class="glass grid h-8 w-8 shrink-0 place-items-center text-fg-soft transition-colors hover:text-accent sm:h-9 sm:w-9"
				aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
				onclick={toggleTheme}
			>
				{#if theme === 'dark'}
					<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
						<circle cx="12" cy="12" r="4" />
						<path
							stroke-linecap="round"
							d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"
						/>
					</svg>
				{:else}
					<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
					</svg>
				{/if}
			</button>

			<button
				type="button"
				class="glass grid h-8 w-8 shrink-0 place-items-center text-fg-soft transition-colors hover:text-accent sm:h-9 sm:w-9 md:hidden"
				aria-expanded={menuOpen}
				aria-controls="mobile-menu"
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span class="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
				<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
					{#if menuOpen}
						<path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
					{:else}
						<path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if menuOpen}
		<nav id="mobile-menu" class="border-t border-line px-5 pt-2 pb-4 md:hidden" aria-label="Primary mobile">
			<ul class="space-y-1">
				<li>
					<a
						href="#stack"
						onclick={() => (menuOpen = false)}
						class="block rounded-md px-3 py-2 text-sm font-medium text-fg-soft transition-colors hover:bg-surface-2 hover:text-accent"
						>Stack</a
					>
				</li>
				<li>
					<a
						href="#experience"
						onclick={() => (menuOpen = false)}
						class="block rounded-md px-3 py-2 text-sm font-medium text-fg-soft transition-colors hover:bg-surface-2 hover:text-accent"
						>{t('nav.exp')}</a
					>
				</li>
				<li>
					<a
						href="#projects"
						onclick={() => (menuOpen = false)}
						class="block rounded-md px-3 py-2 text-sm font-medium text-fg-soft transition-colors hover:bg-surface-2 hover:text-accent"
						>{t('nav.proj')}</a
					>
				</li>
				<li>
					<a
						href="#contact"
						onclick={() => (menuOpen = false)}
						class="block rounded-md px-3 py-2 text-sm font-semibold text-accent transition-colors hover:bg-surface-2"
						>{t('nav.contact')}</a
					>
				</li>
			</ul>
		</nav>
	{/if}
</header>

<main id="main">
	{@render children()}
</main>

<!-- ============ CONTACT / FOOTER ============ -->
<footer id="contact" class="scroll-mt-20 border-t border-line">
	<div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
		<div use:reveal>
			<span class="font-mono text-xs tracking-widest text-accent">{@html t('foot.kicker')}</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{@html t('foot.title')}</h2>
			<p class="mt-4 max-w-xl text-fg-soft">{@html t('foot.sub')}</p>
		</div>

		<nav class="grid gap-3" aria-label="Contact and social">
			<a class="glass group flex min-w-0 items-baseline justify-between gap-4 p-4 transition-colors hover:border-accent/60" href="mailto:boujnanemohamed23@gmail.com">
				<span class="text-sm font-semibold">Email</span>
				<span class="min-w-0 truncate font-mono text-xs text-fg-soft group-hover:text-accent">boujnanemohamed23@gmail.com</span>
			</a>
			<a class="glass group flex items-baseline justify-between gap-4 p-4 transition-colors hover:border-accent/60" href="https://github.com/myendmess" target="_blank" rel="noopener">
				<span class="text-sm font-semibold">GitHub</span>
				<span class="font-mono text-xs text-fg-soft group-hover:text-accent">/myendmess ↗</span>
			</a>
			<a class="glass group flex items-baseline justify-between gap-4 p-4 transition-colors hover:border-accent/60" href="https://www.linkedin.com/in/mboujnane" target="_blank" rel="noopener">
				<span class="text-sm font-semibold">LinkedIn</span>
				<span class="font-mono text-xs text-fg-soft group-hover:text-accent">/mboujnane ↗</span>
			</a>
		</nav>
	</div>
	<div class="mx-auto max-w-6xl border-t border-line px-5 py-6 text-sm text-fg-faint">
		© {year} Mohamed Boujnane
	</div>
</footer>

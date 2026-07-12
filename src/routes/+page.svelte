<script>
	import { t } from '$lib/i18n.svelte.js';
	import { reveal } from '$lib/reveal.js';

	const heroChips = ['Vela', 'Data Pipelines', 'Predictive AI', 'Analytics', 'ETL', 'CI/CD'];

	const stack = [
		{
			title: 'Data & BI',
			tags: ['dbt', 'Snowflake', 'Databricks', 'Tableau', 'Looker', 'LookML', 'SQL', 'Python']
		},
		{
			title: 'AI / ML & Cloud',
			tags: [
				'AI Orchestration',
				'Prompt Engineering',
				'Multi-Agent Automation',
				'Claude',
				'Azure Cognitive (TTS·STT·NLP·LUIS)'
			]
		},
		{
			title: 'FinTech & Market Data',
			tags: [
				'Finnhub API',
				'Data Pipelines',
				'Market Scanning',
				'Algorithmic Automation',
				'GARP Equity Evaluation',
				'Risk Management'
			]
		},
		{
			title: 'ERP Systems',
			tags: ['Infor LN CloudSuite', 'Order-to-Cash', 'Purchase-to-Pay', 'Quality', 'Warehouse Mgmt']
		},
		{
			title: 'DevOps & Tools',
			tags: ['Git', 'CI/CD', 'ETL / ELT', 'Cursor / VS Code', 'Jira / Confluence']
		}
	];

	const experience = [
		{
			role: 'Business Intelligence Analyst',
			org: 'Integral Ad Science',
			date: 'Nov 2025 — Present',
			bullets: ['exp.b1a', 'exp.b1b', 'exp.b1c'],
			tags: ['dbt', 'Snowflake', 'Databricks', 'Looker', 'CI/CD']
		},
		{
			role: 'ERP Application Consultant — Infor LN CloudSuite',
			org: 'Altea IN · Milan, Italy',
			date: 'Jul 2024 — Jul 2025',
			bullets: ['exp.b2a', 'exp.b2b', 'exp.b2c'],
			tags: ['Infor LN', 'O2C', 'P2P', 'UAT']
		},
		{
			role: 'Azure AI/ML Practitioner',
			org: 'Randstad Technologies Italia · Milan, Italy',
			date: 'Feb 2024 — Jun 2024',
			bullets: ['exp.b3a', 'exp.b3b'],
			tags: ['Azure', 'TTS / STT', 'NLP', 'LUIS']
		},
		{
			role: 'Web Developer',
			org: 'Zucchetti · Lodi, Italy',
			date: 'Sep 2020 — Jun 2021',
			bullets: ['exp.b4a'],
			tags: []
		}
	];

	// Certifications — Google programs delivered via Coursera (badges on Credly)
	// plus a Coursera specialization. Rendered as credential cards below.
	const certs = [
		{
			name: 'Google Advanced Data Analytics',
			issuer: 'Google · via Coursera',
			platform: 'Credly',
			letter: 'G',
			color: '#4285F4',
			url: 'https://www.credly.com/badges/556107ba-9ad9-4766-8ce4-dc9822e1fe80/public_url'
		},
		{
			name: 'Google Data Analytics',
			issuer: 'Google · via Coursera',
			platform: 'Credly',
			letter: 'G',
			color: '#4285F4',
			url: 'https://www.credly.com/badges/0693567e-025f-4bfc-ba9d-d1e1e4e23c0b/public_url'
		},
		{
			name: 'Google Business Intelligence',
			issuer: 'Google · via Coursera',
			platform: 'Credly',
			letter: 'G',
			color: '#4285F4',
			url: 'https://www.credly.com/badges/70d257d5-3ea8-47e8-9952-e047eee918f6/public_url'
		},
		{
			name: 'Strengthen Your Business Savvy',
			issuer: 'Coursera',
			platform: 'Coursera',
			letter: 'C',
			color: '#0056D2',
			url: 'https://coursera.org/share/99fd6770db2f20a8e0f38604aadfbf41'
		}
	];

	const spokenLanguages = ['Italian — Native', 'English — C2', 'French — C1', 'Arabic — Fluent'];

	const projects = [
		{
			title: null,
			titleKey: null,
			staticTitle: 'Vela',
			tagKey: 'proj.active',
			live: true,
			descKey: 'proj1.desc',
			url: 'https://myendmess.github.io/Vela/',
			tags: ['Python', 'Finnhub', 'Alpha Vantage', 'GitHub Actions', 'ECharts']
		},
		{
			staticTitle: null,
			titleKey: 'proj2.title',
			tagKey: null,
			staticTag: 'AI · Audio',
			live: false,
			descKey: 'proj2.desc',
			url: 'https://github.com/myendmess/02_AzureIA',
			tags: ['Azure', 'TTS / STT', 'NLP', 'LUIS']
		},
		{
			staticTitle: null,
			titleKey: 'proj3.title',
			tagKey: 'proj.automation',
			live: false,
			descKey: 'proj3.desc',
			url: 'https://github.com/myendmess/daily-quote',
			tags: ['GitHub Actions', 'Cron', 'CI/CD', 'Git']
		},
		{
			staticTitle: null,
			titleKey: 'proj4.title',
			tagKey: 'proj.production',
			live: false,
			descKey: 'proj4.desc',
			url: 'https://github.com/myendmess/01_Data_Analytics',
			tags: ['dbt', 'Snowflake', 'Looker', 'Multi-Agent']
		}
	];
</script>

<svelte:head>
	<title>Mohamed Boujnane — IT & AI Consultant · FinTech & Data</title>
	<meta
		name="description"
		content="Mohamed Boujnane — Data & AI specialist working where technology meets finance. Python data pipelines, BI, AI automation, and algorithmic market scanners."
	/>
	<link rel="canonical" href="https://myendmess.github.io/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Mohamed Boujnane — IT & AI Consultant · FinTech & Data" />
	<meta
		property="og:description"
		content="Data & AI specialist working where technology meets finance. Pipelines, BI, automation, and algorithmic market scanners."
	/>
	<meta property="og:url" content="https://myendmess.github.io/" />
	<meta name="twitter:card" content="summary" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Mohamed Boujnane',
		jobTitle: 'IT & AI Consultant',
		url: 'https://myendmess.github.io/',
		sameAs: ['https://github.com/myendmess', 'https://www.linkedin.com/in/mboujnane'],
		knowsAbout: [
			'Data pipelines',
			'Business intelligence',
			'AI automation',
			'ERP systems',
			'Algorithmic market scanning'
		]
	}).replace(/</g, '\\u003c')}<\/script>`}
</svelte:head>

<!-- ============ HERO ============ -->
<section class="relative">
	<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-20 pb-16 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:pt-28 lg:pb-24">
		<div class="min-w-0">
			<p class="flex items-center gap-2.5 font-mono text-sm text-accent" use:reveal>
				<span class="relative flex h-2 w-2" aria-hidden="true">
					<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
				</span>
				<span>{@html t('hero.eyebrow')}</span>
			</p>
			<h1 class="mt-5 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]" use:reveal>
				{@html t('hero.title')}
			</h1>
			<p class="mt-6 max-w-xl leading-relaxed text-fg-soft [&_strong]:font-semibold [&_strong]:text-fg" use:reveal>
				{@html t('hero.lede')}
			</p>
			<div class="mt-8 flex flex-wrap gap-3" use:reveal>
				<a
					href="#projects"
					class="rounded-lg bg-accent px-6 py-3 font-semibold text-on-accent transition-colors hover:bg-accent-2"
					>{@html t('hero.cta1')}</a
				>
				<a
					href="https://github.com/myendmess"
					target="_blank"
					rel="noopener"
					class="glass px-6 py-3 font-semibold text-fg-soft transition-colors hover:border-accent/60 hover:text-accent"
					>GitHub <span aria-hidden="true">↗</span></a
				>
			</div>
			<ul class="mt-8 flex flex-wrap gap-2" aria-label="Core stack" use:reveal>
				{#each heroChips as chip (chip)}
					<li class="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-fg-soft">
						{chip}
					</li>
				{/each}
			</ul>
		</div>

		<!-- Glass "terminal" visual -->
		<div class="min-w-0" use:reveal>
			<div class="glass overflow-hidden" role="img" aria-label="Terminal output of a Vela market scan run">
				<div class="flex items-center gap-1.5 border-b border-line px-4 py-3">
					<span class="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-[#febc2e]"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-[#28c840]"></span>
					<span class="ml-2 font-mono text-xs text-fg-faint">vela.py</span>
				</div>
				<pre class="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed text-fg-soft"><span class="c-prompt">$</span> python vela.py <span class="c-flag">--strategy garp</span>
<span class="c-dim">→ fetching fundamentals</span>  <span class="c-ok">▰▰▰▰▰▰</span> 100%
<span class="c-dim">→ screening 503 tickers…</span>
<span class="c-ok">✓</span> 12 candidates · GARP filter passed
<span class="c-ok">✓</span> risk model · max-drawdown capped
<span class="c-accent">↗ report pushed via GitHub Actions</span></pre>
				<div class="grid grid-cols-3 border-t border-line">
					<div class="flex flex-col items-center gap-0.5 py-3">
						<span class="font-mono text-sm font-bold text-accent">2</span>
						<span class="text-xs text-fg-faint">scanners</span>
					</div>
					<div class="flex flex-col items-center gap-0.5 border-x border-line py-3">
						<span class="font-mono text-sm font-bold text-accent">cron</span>
						<span class="text-xs text-fg-faint">automated</span>
					</div>
					<div class="flex flex-col items-center gap-0.5 py-3">
						<span class="font-mono text-sm font-bold text-accent">Py</span>
						<span class="text-xs text-fg-faint">+ APIs</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============ STACK ============ -->
<section id="stack" class="scroll-mt-20">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:py-20">
		<header class="max-w-2xl" use:reveal>
			<span class="font-mono text-xs tracking-widest text-accent">{@html t('stack.kicker')}</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{@html t('stack.title')}</h2>
			<p class="mt-4 text-fg-soft">{@html t('stack.sub')}</p>
		</header>

		<div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each stack as card (card.title)}
				<article class="glass p-6 transition-colors hover:border-accent/60" use:reveal>
					<h3 class="font-bold">{card.title}</h3>
					<ul class="mt-4 flex flex-wrap gap-1.5">
						{#each card.tags as tag (tag)}
							<li class="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-fg-soft">
								{tag}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- ============ EXPERIENCE ============ -->
<section id="experience" class="scroll-mt-20">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:py-20">
		<header class="max-w-2xl" use:reveal>
			<span class="font-mono text-xs tracking-widest text-accent">{@html t('exp.kicker')}</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{@html t('exp.title')}</h2>
			<p class="mt-4 text-fg-soft">{@html t('exp.sub')}</p>
		</header>

		<ol class="mt-10 space-y-6 border-s border-line ps-6">
			{#each experience as job (job.role)}
				<li class="relative" use:reveal>
					<span
						class="absolute top-7 -start-[31px] h-3 w-3 rounded-full border-2 border-accent bg-page"
						aria-hidden="true"
					></span>
					<div class="glass p-6">
						<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
							<h3 class="font-bold">{job.role}</h3>
							<span class="font-mono text-xs text-fg-faint">{job.date}</span>
						</div>
						<p class="mt-1 text-sm text-accent">{job.org}</p>
						<ul class="mt-4 space-y-2">
							{#each job.bullets as bullet (bullet)}
								<li class="flex gap-2.5 text-sm leading-relaxed text-fg-soft">
									<span class="mt-0.5 text-accent" aria-hidden="true">▸</span>
									<span>{@html t(bullet)}</span>
								</li>
							{/each}
						</ul>
						{#if job.tags.length}
							<ul class="mt-4 flex flex-wrap gap-1.5">
								{#each job.tags as tag (tag)}
									<li class="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-fg-soft">
										{tag}
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</li>
			{/each}
		</ol>

		<p class="mt-6 text-sm text-fg-faint italic" use:reveal>{@html t('exp.earlier')}</p>

		<!-- Education & certifications -->
		<div class="mt-10 grid gap-5 lg:grid-cols-2">
			<div class="glass p-6" use:reveal>
				<span class="font-mono text-xs tracking-widest text-accent">{@html t('cred.edu')}</span>
				<ul class="mt-4 space-y-3">
					<li class="text-sm leading-relaxed text-fg-soft [&_strong]:text-fg [&_span]:ms-1 [&_span]:font-mono [&_span]:text-xs [&_span]:text-fg-faint">
						{@html t('edu1')}
					</li>
					<li class="text-sm leading-relaxed text-fg-soft [&_strong]:text-fg [&_span]:ms-1 [&_span]:font-mono [&_span]:text-xs [&_span]:text-fg-faint">
						{@html t('edu2')}
					</li>
					<li class="text-sm leading-relaxed text-fg-soft [&_strong]:text-fg [&_span]:ms-1 [&_span]:font-mono [&_span]:text-xs [&_span]:text-fg-faint">
						{@html t('edu3')}
					</li>
				</ul>

				<span class="mt-6 block font-mono text-xs tracking-widest text-accent">{@html t('cred.langs')}</span>
				<ul class="mt-3 flex flex-wrap gap-1.5">
					{#each spokenLanguages as sl (sl)}
						<li class="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-fg-soft">
							{sl}
						</li>
					{/each}
				</ul>
			</div>

			<div class="min-w-0" use:reveal>
				<span class="font-mono text-xs tracking-widest text-accent">{@html t('cred.certs')}</span>
				<div class="mt-4 grid gap-3">
					{#each certs as cert (cert.url)}
						<a
							href={cert.url}
							target="_blank"
							rel="noopener"
							class="glass group flex min-w-0 items-center gap-4 p-4 transition-colors hover:border-accent/60"
						>
							<span
								class="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-lg font-bold"
								style="background: {cert.color}1f; color: {cert.color}"
								aria-hidden="true">{cert.letter}</span
							>
							<span class="min-w-0 flex-1">
								<span class="block truncate text-sm font-semibold">{cert.name}</span>
								<span class="block text-xs text-fg-faint">{cert.issuer}</span>
							</span>
							<span class="shrink-0 text-end">
								<span class="block font-mono text-[11px] text-fg-faint">{cert.platform}</span>
								<span class="block font-mono text-xs text-fg-soft transition-all group-hover:translate-x-0.5 group-hover:text-accent">
									<span class="sr-only">{t('cred.view')} — </span>↗
								</span>
							</span>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- ============ PROJECTS ============ -->
<section id="projects" class="scroll-mt-20">
	<div class="mx-auto max-w-6xl px-5 py-16 sm:py-20">
		<header class="max-w-2xl" use:reveal>
			<span class="font-mono text-xs tracking-widest text-accent">{@html t('proj.kicker')}</span>
			<h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{@html t('proj.title')}</h2>
			<p class="mt-4 text-fg-soft">{@html t('proj.sub')}</p>
		</header>

		<div class="mt-10 grid gap-5 sm:grid-cols-2">
			{#each projects as project (project.url)}
				<a
					href={project.url}
					target="_blank"
					rel="noopener"
					class="glass group flex flex-col p-6 transition-colors hover:border-accent/60"
					use:reveal
				>
					<div class="flex items-center justify-between">
						<span
							class="rounded-full px-2.5 py-0.5 font-mono text-[11px] {project.live
								? 'border border-accent/40 bg-accent/10 text-accent'
								: 'border border-line bg-surface-2 text-fg-soft'}"
						>
							{#if project.tagKey}{@html t(project.tagKey)}{:else}{project.staticTag}{/if}
						</span>
						<span class="text-fg-faint transition-all group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden="true">↗</span>
					</div>
					<h3 class="mt-4 text-lg font-bold">
						{#if project.titleKey}{@html t(project.titleKey)}{:else}{project.staticTitle}{/if}
					</h3>
					<p class="mt-2 flex-1 text-sm leading-relaxed text-fg-soft">{@html t(project.descKey)}</p>
					<ul class="mt-4 flex flex-wrap gap-1.5">
						{#each project.tags as tag (tag)}
							<li class="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-fg-soft">
								{tag}
							</li>
						{/each}
					</ul>
				</a>
			{/each}
		</div>
	</div>
</section>

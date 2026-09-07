
<script lang="ts">
	import { page } from '$app/state';
	import { translations, type Language } from '$lib/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

	const lang = $derived(page.params.lang as Language);
	const t = $derived(translations[lang]);
</script>

<svelte:head>
	<title>S Labs — {t.projects.title}</title>
	<meta name="description" content={t.hero.description} />
</svelte:head>

<header class="navbar">
	<a class="logo" href={`/${lang}`}>S<span>LABS</span></a>

	<nav>
		<a href={`/${lang}#projects`}>{t.nav.projects}</a>
		<a href={`/${lang}#about`}>{t.nav.about}</a>
	</nav>

	<LanguageSwitcher />
</header>

<main>
	<section class="hero">
		<p class="eyebrow">{t.hero.eyebrow}</p>

		<h1>
			{t.hero.titleLine1}<br />
			<span>{t.hero.titleLine2}</span><br />
			{t.hero.titleLine3}
		</h1>

		<p class="hero-description">
			{t.hero.description}
		</p>

		<div class="hero-actions">
			<a class="button primary" href={`/${lang}#projects`}>
				{t.hero.explore}
			</a>

			<a class="button secondary" href={`/${lang}#about`}>
				{t.hero.about}
			</a>
		</div>
	</section>

	<section id="projects" class="section">
		<div class="section-heading">
			<p class="eyebrow">{t.projects.eyebrow}</p>
			<h2>{t.projects.title}</h2>
		</div>

		<div class="projects">
			<article class="project-card">
				<div class="project-top">
					<span class="project-index">{t.projects.kind}</span>
					<span class="arrow">↗</span>
				</div>

				<h3>ARGOS</h3>
				<p>{t.projects.items.argos.description}</p>

				<div class="tags">
					{#each t.projects.items.argos.tags as tag}
						<span>{tag}</span>
					{/each}
				</div>
			</article>

			<article class="project-card">
				<div class="project-top">
					<span class="project-index">{t.projects.kind}</span>
					<span class="arrow">↗</span>
				</div>

				<h3>Nexus Campus</h3>
				<p>{t.projects.items.nexusCampus.description}</p>

				<div class="tags">
					{#each t.projects.items.nexusCampus.tags as tag}
						<span>{tag}</span>
					{/each}
				</div>
			</article>

			<article class="project-card">
				<div class="project-top">
					<span class="project-index">{t.projects.kind}</span>
					<span class="arrow">↗</span>
				</div>

				<h3>Hardware Lab</h3>
				<p>{t.projects.items.hardwareLab.description}</p>

				<div class="tags">
					{#each t.projects.items.hardwareLab.tags as tag}
						<span>{tag}</span>
					{/each}
				</div>
			</article>
		</div>
	</section>

	<section id="about" class="section about">
		<div class="section-heading">
			<p class="eyebrow">{t.about.eyebrow}</p>
			<h2>{t.about.title}</h2>
		</div>

		<p class="about-text">
			{t.about.text}
		</p>
	</section>
</main>

<footer>
	<div class="logo">S<span>LABS</span></div>
	<p>{t.footer}</p>
</footer>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		background: #080808;
		color: #f5f5f5;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
			"Segoe UI", sans-serif;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	.navbar {
		position: sticky;
		top: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24px 6vw;
		background: rgba(8, 8, 8, 0.8);
		backdrop-filter: blur(16px);
		border-bottom: 1px solid #1b1b1b;
	}

	.logo {
		font-weight: 800;
		font-size: 1.2rem;
		letter-spacing: 0.12em;
	}

	.logo span {
		font-weight: 400;
		opacity: 0.55;
	}

	nav {
		display: flex;
		gap: 28px;
		color: #999;
		font-size: 0.9rem;
	}

	nav a:hover {
		color: white;
	}

	main {
		overflow: hidden;
	}

	.hero {
		min-height: 82vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 100px 6vw;
		max-width: 1200px;
		margin: auto;
	}

	.eyebrow {
		margin: 0 0 20px;
		color: #777;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.18em;
	}

	h1 {
		max-width: 900px;
		margin: 0;
		font-size: clamp(4rem, 10vw, 9rem);
		line-height: 0.88;
		letter-spacing: -0.07em;
	}

	h1 span {
		color: #777;
	}

	.hero-description {
		max-width: 600px;
		margin: 40px 0 0;
		color: #999;
		font-size: 1.1rem;
		line-height: 1.7;
	}

	.hero-actions {
		display: flex;
		gap: 12px;
		margin-top: 32px;
	}

	.button {
		padding: 13px 20px;
		border: 1px solid #333;
		border-radius: 6px;
		font-size: 0.9rem;
		transition: 0.2s ease;
	}

	.button:hover {
		transform: translateY(-2px);
	}

	.primary {
		background: white;
		color: black;
		border-color: white;
	}

	.secondary {
		color: #aaa;
	}

	.section {
		max-width: 1200px;
		margin: auto;
		padding: 120px 6vw;
	}

	.section-heading h2 {
		margin: 0;
		font-size: clamp(2.5rem, 5vw, 5rem);
		letter-spacing: -0.05em;
	}

	.projects {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 16px;
		margin-top: 60px;
	}

	.project-card {
		min-height: 300px;
		padding: 28px;
		display: flex;
		flex-direction: column;
		border: 1px solid #222;
		border-radius: 10px;
		background: #0d0d0d;
		transition: 0.25s ease;
	}

	.project-card:hover {
		transform: translateY(-5px);
		border-color: #444;
	}

	.project-top {
		display: flex;
		justify-content: space-between;
		color: #666;
		font-size: 0.7rem;
		letter-spacing: 0.12em;
	}

	.arrow {
		font-size: 1.2rem;
	}

	.project-card h3 {
		margin: auto 0 10px;
		font-size: 2rem;
	}

	.project-card p {
		margin: 0 0 25px;
		color: #888;
		line-height: 1.6;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
	}

	.tags span {
		padding: 5px 8px;
		border: 1px solid #292929;
		border-radius: 4px;
		color: #777;
		font-size: 0.7rem;
	}

	.about-text {
		max-width: 800px;
		margin-top: 50px;
		color: #999;
		font-size: clamp(1.4rem, 3vw, 2.4rem);
		line-height: 1.5;
	}

	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 40px 6vw;
		border-top: 1px solid #1b1b1b;
		color: #666;
		font-size: 0.8rem;
	}

	@media (max-width: 800px) {
		nav {
			display: none;
		}

		.hero {
			min-height: 75vh;
			padding-top: 80px;
		}

		.projects {
			grid-template-columns: 1fr;
		}

		.hero-actions {
			flex-direction: column;
			align-items: stretch;
		}

		.button {
			text-align: center;
		}

		footer {
			flex-direction: column;
			gap: 20px;
		}
	}
</style>

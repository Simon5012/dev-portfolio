<script lang="ts">
	import { page } from '$app/state';
	import { supportedLanguages, languageNames, type Language } from '$lib/i18n';

	const currentLang = $derived(page.params.lang as Language);
	const currentPath = $derived(page.url.pathname);
	const currentHash = $derived(page.url.hash);

	function switchLanguage(language: Language) {
		const pathWithoutLanguage = currentPath.replace(/^\/(fr|en|istaarien)(?=\/|$)/, '');

		const newPath = `/${language}${pathWithoutLanguage || ''}`;

		window.location.href = `${newPath}${currentHash}`;
	}
</script>

<div class="language-switcher" aria-label="Language selector">
	{#each supportedLanguages as language, i}
		{#if i > 0}
			<span class="separator">·</span>
		{/if}

		<button
			class:active={currentLang === language}
			type="button"
			aria-current={currentLang === language ? 'page' : undefined}
			onclick={() => switchLanguage(language)}
		>
			{language === 'istaarien' ? 'IST' : language.toUpperCase()}
		</button>
	{/each}
</div>

<style>
	.language-switcher {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	button {
		padding: 0;
		border: 0;
		background: none;
		color: #666;
		font: inherit;
		font-size: 0.75rem;
		font-weight: 700;
		cursor: pointer;
		transition: color 0.2s ease;
	}

	button:hover,
	button.active {
		color: #fff;
	}

	.separator {
		color: #333;
		font-size: 0.75rem;
	}
</style>
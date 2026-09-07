import { error } from '@sveltejs/kit';
import { isLanguage } from '$lib/i18n';

export const load = ({ params }) => {
	if (!isLanguage(params.lang)) {
		error(404, 'Language not found');
	}

	return {
		lang: params.lang
	};
};
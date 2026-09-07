import { redirect } from '@sveltejs/kit';

export const load = ({ request }) => {
	const acceptLanguage = request.headers.get('accept-language') ?? '';

	if (acceptLanguage.toLowerCase().startsWith('fr')) {
		redirect(307, '/fr/');
	}

	redirect(307, '/en/');
};
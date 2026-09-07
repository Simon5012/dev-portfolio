import { fr } from './fr';
import { en } from './en';
import { istaarien } from './istaarien';

export const supportedLanguages = ['fr', 'en', 'istaarien'] as const;

export type Language = (typeof supportedLanguages)[number];

export const languageNames: Record<Language, string> = {
	fr: 'Français',
	en: 'English',
	istaarien: 'Istaari'
};

export const translations = {
	fr,
	en,
	istaarien
} satisfies Record<Language, object>;

export function isLanguage(value: string): value is Language {
	return supportedLanguages.includes(value as Language);
}
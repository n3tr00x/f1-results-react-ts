import nationalities from 'i18n-nationality';
import en from 'i18n-nationality/langs/en.json';
import { getNationFlagUrl } from './getNationFlagUrl';

nationalities.registerLocale(en);

const SPECIAL_CASES: { [key: string]: string } = {
	'Monegasque': 'Monacan',
	'Argentine': 'Argentinean',
	'East German': 'German',
	'Rhodesian': 'Zimbabwean',
	'Argentinian': 'Argentinean',
};

export const convertNationalityToCode = (nationality: string) => {
	const specialCaseCode = SPECIAL_CASES[nationality.trim()] || nationality.trim();
	const code = nationalities.getAlpha3Code(specialCaseCode, 'en');

	return getNationFlagUrl(code);
};

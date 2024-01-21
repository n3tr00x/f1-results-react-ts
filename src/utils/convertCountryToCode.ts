import countries from 'i18n-iso-countries';
import en from 'i18n-iso-countries/langs/en.json';
import { getNationFlagUrl } from './getNationFlagUrl';

countries.registerLocale(en);

const SPECIAL_CASES: { [key: string]: string } = {
	'UAE': 'United Arab Emirates',
	'Korea': 'South Korea',
};

export const convertCountryToCode = (countryName: string) => {
	const specialCaseCode = SPECIAL_CASES[countryName] || countryName;
	const code = countries.getAlpha3Code(specialCaseCode, 'en');

	if (code) {
		return getNationFlagUrl(code);
	}
};

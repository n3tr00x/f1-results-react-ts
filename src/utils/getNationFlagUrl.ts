export const getNationFlagUrl = (countryCode: string) => {
	return new URL(`/src/assets/flags/${countryCode.toLowerCase()}.png`, import.meta.url)
		.href;
};

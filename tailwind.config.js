/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			'sans': ['montserrat-regular', 'sans-serif'],
		},
		extend: {
			fontFamily: {
				'mt-bold': ['montserrat-bold', 'sans-serif'],
				'mt-italic': ['montserrat-italic', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

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
			animation: {
				'slide-up': 'fade-slide-up 0.3s ease-out forwards',
			},
			keyframes: {
				'fade-slide-up': {
					'from': {
						opacity: 0,
						transform: 'translateY(4rem)',
					},
					'to': {
						opacity: 1,
						transform: 'translateY(0)',
					},
				},
			},
		},
	},
	plugins: [],
};

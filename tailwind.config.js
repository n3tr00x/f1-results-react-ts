/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			'sans': ['f1-regular', 'sans-serif'],
		},
		extend: {
			fontFamily: {
				'f1-bold': ['f1-bold', 'sans-serif'],
				'f1-italic': ['f1-italic', 'sans-serif'],
				'f1-black': ['f1-black', 'sans-serif'],
				'f1-regular': ['f1-regular', 'sans-serif'],
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

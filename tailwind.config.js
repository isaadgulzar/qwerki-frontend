/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'purple-bg-color': '#E4DFFF',
				'purple-text-color': '#6659A9',
				'blue-bg-color': '#D8EEFB',
				'blue-title-color': '#436579',
				'green-bg-color': '#D3F1D6',
				'green-title-color': '#3A7740',
				'light-black-bg-color': '#272727',
			},
			fontFamily: {
				playFairDisplay: ['Playfair Display', 'serif'],
				roboto: ['Roboto', 'sans-serif'],
				backgroundImage: {
					'hero-pattern': "url('./assets/hero-bg.svg')",
				},
			},
			boxShadow: {
				card: '0px 0px 0px 0px rgba(0, 0, 0, 0.07), 0px 14px 30px 0px rgba(0, 0, 0, 0.07), 0px 55px 55px 0px rgba(0, 0, 0, 0.06), 0px 124px 75px 0px rgba(0, 0, 0, 0.04), 0px 221px 88px 0px rgba(0, 0, 0, 0.01), 0px 345px 97px 0px rgba(0, 0, 0, 0.00)',
				'black-card':
					'0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 14px 30px 0px rgba(0, 0, 0, 0.10), 0px 55px 55px 0px rgba(0, 0, 0, 0.09), 0px 124px 75px 0px rgba(0, 0, 0, 0.05), 0px 221px 88px 0px rgba(0, 0, 0, 0.01), 0px 345px 97px 0px rgba(0, 0, 0, 0.00)',
			},
		},
	},
	plugins: [],
};

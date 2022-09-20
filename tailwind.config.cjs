/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				barlowCondensed: ['"Barlow Condensed"', 'sans-serif'],
				bellefair: ['Bellefair', 'serif'],
				barlow: ['Barlow', 'sans-serif']
			}
		}
	},
	plugins: []
};

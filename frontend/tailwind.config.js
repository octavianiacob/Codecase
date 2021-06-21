const colors = require('tailwindcss/colors')

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				offwhite: '#F1F6F9',
				blueGray: colors.blueGray,
				coolGray: colors.coolGray,
				emerald: colors.emerald,
				teal: colors.teal,
				cyan: colors.cyan,
				lightBlue: colors.lightBlue,
				orange: colors.orange,
				lime: colors.lime,
				pink: colors.pink
			},
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
				OpenSans: ['"Open Sans"', 'sans-serif']
			},
			scale: {
				'101': '1.01'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};

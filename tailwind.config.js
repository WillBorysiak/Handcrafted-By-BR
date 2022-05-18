module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {},
		fontFamily: {
			lato: ['Lato', 'san-serif'],
			roman: ['Luxurious Roman', 'san-serif'],
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};

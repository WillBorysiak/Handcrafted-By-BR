module.exports = {
	content: ['./src/**/*.tsx'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#fed7aa',
				secondary: '#1f2937',
			},
		},
		fontFamily: {
			lato: ['Lato', 'san-serif'],
			roman: ['Luxurious Roman', 'san-serif'],
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};

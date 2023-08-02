/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				boxing: ['Boxing', 'san-serif'],
				'boxing-stripped': ['Boxing Stripped','san-serif'],
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
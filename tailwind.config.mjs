/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        primary: '#0D4040',
        secondary: '#57D9D9',
        terciary: '#007474',
        quaternary: '#99FFFF',
        quinary: '#DEFFFF',
    },
    fontFamily: {
      kilam: ['ITC Avant Garde Pro'],
      minecraft: ['F77MinecraftRegular'],
    },
    backgroundImage: {
      eyespyHome: 'url("/EyespyHome.png")',
    }
	},
	plugins: [],
}
}

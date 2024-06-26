module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: "",
    plugins: [require('@tailwindcss/typography')],
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
};

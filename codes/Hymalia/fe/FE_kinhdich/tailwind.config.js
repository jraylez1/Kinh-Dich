/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    mode: 'jit',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            spacing: {},
        },
        screens: {
            mobile: '300px',

            tablet: '700px',

            laptop: '1024px',

            desktop: '1280px',
        },
    },
    plugins: [],
};

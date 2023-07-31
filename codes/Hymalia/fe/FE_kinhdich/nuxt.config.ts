// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ['~/assets/css/main.css', '~/assets/css/style.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@pinia/nuxt', '@element-plus/nuxt', '@vee-validate/nuxt'],
    runtimeConfig: {
        public: {
            baseUrl: '/',
        },
    },
});

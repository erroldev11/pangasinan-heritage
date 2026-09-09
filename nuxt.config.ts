export default defineNuxtConfig({
  compatibilityDate: '2026-09-09',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/pangasinan-heritage/' : '/',
    head: {
      title: 'Pangasinan Heritage',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover the heritage sites of Pangasinan' }
      ]
    }
  },

  nitro: {
    static: true,
    compressPublicAssets: true
  }
})
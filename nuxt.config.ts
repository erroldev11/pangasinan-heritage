export default defineNuxtConfig({
  compatibilityDate: '2026-09-07',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  css: ['~/assets/css/main.css'],
  
  // SSG Configuration
  ssr: true,
  nitro: {
    static: true,  // ← Ito ang nag-e-enable ng static site generation!
    compressPublicAssets: true,
    routeRules: {
      '/**': { 
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    }
  },
  
  app: {
    head: {
      title: 'Pangasinan Heritage',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover the heritage sites of Pangasinan' }
      ]
    }
  }
})
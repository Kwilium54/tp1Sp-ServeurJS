// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/webp', href: '/assets/logo-3-2.webp' }]
    }
  }
})

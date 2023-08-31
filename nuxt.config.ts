// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@pinia/nuxt'],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'devdorne.',
      meta: [
        {
          name: 'description',
          content:
            'Welcome to devdorne. Our mission is to provide quality articles ranging from beginner to advanced levels to help you become a better programmer.',
        },
      ],
      script: [
        {
          src: 'https://cdn-cookieyes.com/client_data/23a0da77ccd3cf3e754f677c/script.js',
          id: 'cookieyes',
          type: 'text/javascript',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap',
        },
      ],
    },
  },
});

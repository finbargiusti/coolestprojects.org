const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Coolest Projects',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The world leading technology fair for young people' },
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Coolest Projects - The world leading technology fair for young people' },
      { hid: 'og:site-name', name: 'og:site-name', property: 'og:site-name', content: 'Coolest Projects' },
      { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://coolestprojects.org/' },
      { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', name: 'og:image', property: 'og:image', content: '/images/logo-orange.png' },
      { hid: 'twitter:title', name: 'twitter:title', property: 'twitter:title', content: 'Coolest Projects - The world leading technology fair for young people' },

    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-112027238-1'
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

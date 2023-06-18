export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'spa',
  devtools: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Demo',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/axios.client'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'vue-toastification/nuxt',
    ["vue-toastification/nuxt",{
      timeout: 1000,
      draggable: false
    }]
  ],

  axios:{
    baseURL : 'http://localhost:3001/api',
   
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'token.accessToken',
  //         global: true,
  //         // required: true,
  //          type: 'Bearer '
  //       },
        
  //       user: {
  //         property: 'users',
  //          autoFetch: true
  //       },
  //       endpoints: {
  //         login: { url: '/users/login', method: 'post' },
  //         logout: { url: '/api/auth/logout', method: 'post' },
  //         user: { url: '/api/users/', method: 'get' }
  //       },
       
  //     },
     
      
  //   }
  // }
}

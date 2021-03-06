import whitelister from 'purgecss-whitelister'

export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/scss/app.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
  ],
  plugins: [
    '@/plugins/fontawesome',
    { src: '@/plugins/vueperfectscrollbar', mode: 'client' },
    { src: '@/plugins/vuedraggable', mode: 'client' },
    { src: '@/plugins/utils', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/dotenv', '@nuxtjs/svg'],
  axios: {},
  build: {
    extend(config, ctx) {}
  },
  tailwindcss: {
    purgeCSSInDev: true
  },
  purgeCSS: {
    paths: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue'],
    whitelist: () =>
      whitelister([
        './assets/css/*.css',
        './assets/scss/*.scss',
        './node_modules/vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css',
        './node_modules/@fortawesome/fontawesome-svg-core/styles.css'
      ])
  }
}

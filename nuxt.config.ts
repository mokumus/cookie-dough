import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/cookie-dough/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxtjs/i18n',
    '@nuxt/content',
  ],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    build: {
      minify: 'terser', // <-- add
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
  routeRules: {
    '/api/**': {
      prerender: false,
      ssr: false,
      proxy: process.env.BASE_URL + "/api/**",
    },
  },
})

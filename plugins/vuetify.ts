// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.green.darken1,
            secondary: colors.green.lighten4,
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#171717',
            secondary: '#01579B',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})

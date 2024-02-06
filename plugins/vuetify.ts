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
            button: '#365EB5',
            matchcard: '#0288D1'
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#01579B',
            secondary: '#0D47A1',
            button: '#ffffff',
            matchcard: '#0288D1'
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})

<template>
  <v-app :theme="theme">
    <AppHeader
      :theme="theme"
      @updateTheme="updateTheme"
      :style="{ background: $vuetify.theme.themes[theme].background }"
    />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
export default defineComponent({
  data() {
    return {
      theme: 'light',
    }
  },
  mounted() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'dark'
    }
  },
  methods: {
    updateTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
  },
})
</script>

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

    <AppFooter :isMobile="isMobile"/>
  </v-app>
</template>

<script>
export default defineComponent({
  data() {
    return {
      theme: 'light',
      isMobile: false,
    }
  },
  mounted() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.theme = 'dark'
    }

    this.isMobile = window.innerWidth < 600

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 600
    })
    
  },
  methods: {
    updateTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
  },
  
})
</script>

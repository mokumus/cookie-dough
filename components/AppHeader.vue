<template>
  <v-app-bar :elevation="2" app density="compact" absolute color="primary">
    <template v-slot:prepend>
      <v-btn variant="tonal" to="/">Ana Sayfa</v-btn>

    </template>
    <template v-slot:append>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-btn
        :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        @click="$emit('updateTheme')"
      ></v-btn>
      <!-- <LanguageSelector/> -->
    </template>

    <v-app-bar-title class="font-weight-bold">{{ $t('title') }}</v-app-bar-title>
  </v-app-bar>
</template>

<script>
export default defineComponent({
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <v-container fluid>
    <v-app-bar :elevation="2" density="compact" color="primary">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

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
    <v-navigation-drawer v-model="drawer" temporary floating theme="theme">
      <v-list :items="items" nav>
        <template v-slot:prepend>
          <v-list-item-title>{{ $t('menu') }}</v-list-item-title>
        </template>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
          <template v-slot:prepend>
            <v-icon :icon="item.icon" :color="item.iconColor"></v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>  
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default defineComponent({
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      version: '0.0.0',
      drawer: false,
      items: [
        { title: 'Ana Sayfa', link: '/', description: 'Ana sayfa', icon: 'mdi-home' },
        {
          title: 'Emsile (Fiil Eşleştirme)',
          link: '/eslestirme',
          description: 'Arapça alıştırma',
          icon: 'mdi-abjad-arabic',
          iconColor: 'blue',
        },
        { title: 'Emsile (Siga)', link: '/eslestirme-siga', description: 'Arapça alıştırma', icon: 'mdi-abjad-arabic' },
        { title: 'Hadisler', link: '/hadis', description: 'Kütüb-i Sitte', icon: 'mdi-card-text', iconColor: 'blue' },
        {
          title: 'İngilizce Hadis',
          link: '/hadis-english',
          description: 'İmam Buhari, İmam Müslim, Ebu Davud, Tirmizi, Nesai, İbn Mace',
          icon: 'mdi-card-text',
        },
        {
          title: 'Emsile-i Muhtelife',
          link: '/muhtelife',
          description:
            'Emsile-i Muhtelife kelimesi, Osmanlı Devleti döneminde kullanılan Türkçe kelimeyi ifade eder. Arap alfabesiyle yazılan Emsile-i Muhtelife Osmanlı Türkçesi kelimesi, o dönemin resmi ve edebi dilinde kullanılan kelimeyi göstermektedir.',
          icon: 'mdi-volume-high',
          iconColor: 'blue',
        },
        {
          title: 'Emsile-i Muttaride',
          link: '/muttaride',
          description:
            'Asıl harfleri bir ve şekilleri farklı olup, bir birine benzeyen sigalara denir. Muttaride fiiller malum ve meçhul olmak üzere iki kısma ayrılır.',
          icon: 'mdi-volume-high',
        },
      ],
    }
  },

})
</script>

<style scoped></style>

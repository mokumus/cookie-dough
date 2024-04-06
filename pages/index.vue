<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-col v-for="card in cards" :key="card.title" cols="12" sm="6">
        <v-card :to="card.link" :color="indexCardColor" elevation="10" height="150">
          <v-card-title>
            <h2 class="text-h5">{{ card.title }}</h2>
          </v-card-title>
          <v-card-text>{{ card.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: 'Emsile (Fiil Eşleştirme)', link: '/eslestirme', description: 'Arapça alıştırma' },
        { title: 'Emsile (Siga)', link: '/eslestirme-siga', description: 'Arapça alıştırma' },
        { title: 'Hadisler', link: '/hadis', description: 'Kütüb-i Sitte' },
        {
          title: 'İngilizce Hadis',
          link: '/hadis-english',
          description: 'İmam Buhari, İmam Müslim, Ebu Davud, Tirmizi, Nesai, İbn Mace',
        },
        { title: 'Emsile-i Muhtelife', link: '/muhtelife', description: 'Emsile-i Muhtelife kelimesi, Osmanlı Devleti döneminde kullanılan Türkçe kelimeyi ifade eder. Arap alfabesiyle yazılan Emsile-i Muhtelife Osmanlı Türkçesi kelimesi, o dönemin resmi ve edebi dilinde kullanılan kelimeyi göstermektedir.'},
        { title: 'Emsile-i Muttaride', link: '/muttaride', description: 'Asıl harfleri bir ve şekilleri farklı olup, bir birine benzeyen sigalara denir. Muttaride fiiller malum ve meçhul olmak üzere iki kısma ayrılır.'}
      ],
      indexCardColor: 'indexCard', // Assuming this color is defined in your theme
    }
  },
}
</script>

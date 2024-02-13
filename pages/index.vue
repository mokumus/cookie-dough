<template>
  <v-container fluid fill-height>
    <v-row justify="center"> <v-col v-for="card in cards" :key="card.title" cols="12" sm="6">
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
        { title: 'İngilizce Hadis', link: '/hadis-english', description: 'İmam Buhari, İmam Müslim, Ebu Davud, Tirmizi, Nesai, İbn Mace' },
      ],
      indexCardColor: 'indexCard', // Assuming this color is defined in your theme
    };
  },
};
</script>
<template>
  <v-card color="secondary" elevation="10" class="mx-auto" :loading="!randomHadith">
    <!-- loading centered progress -->

    <v-card-title class="text-wrap">{{ randomHadith?.book }}<br />{{ randomHadith?.bookName }}</v-card-title>
    <v-card-subtitle class="text-wrap">{{ randomHadith?.chapterName }}</v-card-subtitle>
    <v-card-subtitle class="text-wrap">{{ randomHadith?.header }}</v-card-subtitle>
    <v-card-text>{{ randomHadith?.hadith_english }}</v-card-text>
    <v-card-text>{{ randomHadith?.refno }}</v-card-text>
    <v-card-actions>
      <v-btn color="button" variant="tonal" @click="fetchRandomHadith">Renew</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    randomHadith: null,
  }),
  mounted() {
    this.randomHadith = this.fetchRandomHadith()
  },

  methods: {
    async fetchRandomHadith() {
      let books = ['bukhari', 'muslim', 'tirmidhi', 'ibnmajah', 'abudawud']
      let book = books[Math.floor(Math.random() * books.length)]
      const { data } = await $fetch(`https://random-hadith-generator.vercel.app/${book}/`)
      this.randomHadith = data
    },
  },
}
</script>

<template>
  <div>
    <v-card color="secondary">
      <v-card-title>{{ randomHadith?.book }} -- {{ randomHadith?.bookName }}</v-card-title>
      <v-card-subtitle>{{ randomHadith?.chapterName }}</v-card-subtitle>
      <v-card-subtitle>{{ randomHadith?.header }}</v-card-subtitle>
      <v-card-text>{{ randomHadith?.hadith_english }}</v-card-text>
      <v-card-text>{{ randomHadith?.refno }}</v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="fetchRandomQuranVerse">Random Hadith</v-btn>
      </v-card-actions>
      </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    randomQuote: null,
    randomHadith: null,
  }),
  mounted() {
    this.randomQuote = this.fetchQuote()
    this.randomHadith = this.fetchRandomQuranVerse()
  },

  methods: {
    async fetchQuote() {
      const response = await fetch('https://api.quotable.io/random')
      this.randomQuote = await response.json()
    },
    async fetchRandomQuranVerse() {
      let books = ['bukhari', 'muslim', 'tirmidhi', 'ibnmajah', 'abudawud']
      let book = books[Math.floor(Math.random() * books.length)]
      const { data } = await $fetch(`https://random-hadith-generator.vercel.app/${book}/`)
      console.log('data', data)
      this.randomHadith = data
    },
  },
}
</script>

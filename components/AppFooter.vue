<template>
  <v-footer class="text-center d-flex flex-column" color="primary">
    <div>
      <!-- redirect to href -->
      <v-btn
        v-for="item in items"
        :key="item.icon"
        class="mx-4"
        :icon="item.icon"
        variant="text"
        :href="item.href"
        target="_blank"
      ></v-btn>
    </div>

    <div class="pt-0">{{ randomQuote?.content }} — {{ randomQuote?.author }}</div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/muhammed-okumu%C5%9F-26b5b71aa/' },
      { icon: 'mdi-github', href: 'https://github.com/mokumus' },
    ],
    randomQuote: null,
  }),
  mounted() {
    this.randomQuote = this.fetchQuote()
  },

  methods: {
    async fetchQuote() {
      const response = await fetch('https://api.quotable.io/random')
      this.randomQuote = await response.json()
    },
  },
}
</script>

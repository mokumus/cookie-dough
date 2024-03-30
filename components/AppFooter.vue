<template>
  <v-footer class="text-center d-flex flex-column" app  color="primary">
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
      <v-btn
      icon
      flat
      color="transparent"
      @click="scrollToTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    </div>
    <!-- scroll to top -->

  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/muhammed-okumu%C5%9F-26b5b71aa/' },
      { icon: 'mdi-github', href: 'https://github.com/mokumus/cookie-dough' },

    ],
    randomQuote: null,
  }),
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

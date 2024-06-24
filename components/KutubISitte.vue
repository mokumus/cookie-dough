<template>
  <v-card color="primary" elevation="10" class="mx-auto">
    <v-card-title class="text-wrap">{{ current?.section }}<br />{{ current?.chapterName }}</v-card-title>
    <v-card-subtitle class="text-wrap">Rivayet Eden: {{ current?.header }}</v-card-subtitle>
    <v-card-text>{{ current?.text }}</v-card-text>
    <v-card-text>{{ current?.refno }}</v-card-text>
    <v-card-actions>
      <v-btn color="button" variant="tonal" @click="getRandomFromArray(data)">Yenile</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import data from '../content/kutubisitte.json'

export default {
  data() {
    return {
      data,
      current: null,
      current_query: null,
    }
  },

  mounted() {
    if (this.$route.query.id) {
      this.current = this.getById(this.$route.query.id)
    } else {
      this.getRandomFromArray(data)
    }
    // watch url changes and update the current hadis
    this.$watch(
      () => this.$route.query.id,
      (id) => {
        this.current = this.getById(id)
      }
    )
  },
  methods: {
    getRandomFromArray(array) {
      this.current = array[Math.floor(Math.random() * array.length)]
      // update the URL
      this.$router.push({ query: { id: this.current.id } })
    },

    getById(id) {
      return this.data.find((item) => item.id === id)
    },
  },
}
</script>

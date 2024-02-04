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
    }
  },

  mounted() {
    this.getRandomFromArray(data)
  },
  methods: {
    getRandomFromArray(array) {
      this.current = array[Math.floor(Math.random() * array.length)]
    },
  },
}
</script>

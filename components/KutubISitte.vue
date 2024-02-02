<template>
  <div>
    <v-card color="primary">
      <v-card-title>{{ current?.section }} -- {{ current?.chapterName }}</v-card-title>
      <v-card-subtitle>{{ current?.book }}</v-card-subtitle>
      <v-card-subtitle>Rivayet Eden: {{ current?.header }}</v-card-subtitle>
      <v-card-text>{{ current?.text }}</v-card-text>
      <v-card-text>{{ current?.id }}</v-card-text>
      <v-card-actions>
        <v-btn text @click="getRandomFromArray(data)">Yenile</v-btn>
      </v-card-actions>
    </v-card>
  </div> 



</template>

<script>
import data from '../content/kutubisitte.json'

export default {
  data() {
    return {
      data,
      current: null
    }
  },

  mounted() {
    this.getRandomFromArray(data)
  },
  methods: {
    getRandomFromArray(array) {
      this.current = array[Math.floor(Math.random() * array.length)]
    },
    getPrettyBookName(bookName){
    if (!bookName) return
    let names = ['buhari', 'muslim', 'tirmizi', 'ibnmajah', 'ebu davud']
    return bookName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
  }


}

</script>
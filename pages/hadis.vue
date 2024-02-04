<template>
  <v-container fluid fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <kutub-i-sitte></kutub-i-sitte>
      </v-col>
     
    </v-row>
    <v-row class="pt-5" justify="center" align="center"> 
      <v-col cols="12">
        <external-hadith></external-hadith>
      </v-col>
      
    </v-row>
    
    
  </v-container>
</template>

<script>
export default {
  data: () => ({
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

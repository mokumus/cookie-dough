<template>
  <v-card class="ma-2" height="60" width="400" :color="color">
    <v-card-text>
      <h2 class="text-bold text-center" :style="`font-size: ${fontSize}`">{{ item[lang] }}</h2>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
    isMatched: {
      type: Boolean,
      required: false,
    },
  },

  computed: {
    color() {
      return this.isMatched ? 'green' : 'yellow'
    },
    fontSize() {
      //bigger if arabic
      return this.lang === 'ar' ? '44px' : '20px'
    }
  },
}
</script>

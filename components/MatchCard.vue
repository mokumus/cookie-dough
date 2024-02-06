<template>
  <v-card class="pa-0 ma-1" height="60" width="400" :color="color">
    <v-card-text :class="classString" class="cardText">
      {{ item[lang] }}
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

  data() {
    return {
      isMobile: false,
    }
  },

  mounted() {
    //watch window width
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },

  computed: {
    color() {
      return this.isMatched ? 'green' : 'matchcard'
    },
    // text center if arabic
    textAlign() {
      return this.lang === 'ar' ? 'text-center' : 'text-left'
    },
    // bigger font arabic
    fontSize() {
      return this.lang === 'ar' ? 'text-h5' : 'font-weight-medium'
    },
    // textAlign + fontSize
    classString() {
      return `${this.textAlign} ${this.fontSize}`
    },
  },

  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 960
    },
  },
}
</script>

<style scoped>
/* unselectable, no-wrap, scaled on mobile */
.cardText {
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  @media (max-width: 960px) {
    font-size: .8rem;
  }
}
</style>

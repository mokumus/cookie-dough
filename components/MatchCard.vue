<template>
  <v-card class="ma-2" :height="height" width="400" :color="color">
    <v-card-text :class="customClass" :style="`font-size: ${fontSize}`">
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
      return this.isMatched ? 'green' : 'yellow'
    },

    height() {
      return this.isMobile ? '90' : '90'
    },

    customClass() {
      // center if arabic, right if turkish and isMobile
      // return this.isMobile ? this.lang === 'ar' ? 'text-center' : 'text-left' : 'text-left'
      if (this.isMobile) {
        return this.lang === 'ar' ? 'text-center' : 'text-left font-weight-medium"'
      } else {
        return this.lang === 'ar' ? 'text-center' : 'text-center font-weight-medium"'
      }
    },

    fontSize() {
      // bigger if arabic
      // both small on mobile
      return this.lang === 'ar' ? '36px' : '14px'
    },
  },

  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 960
    },
  },
}
</script>

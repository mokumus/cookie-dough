<template>
  <v-select
    v-model="selectedWord"
    :items="words"
    label="Kelime Seç"
    outlined
    dense
    class="mx-4"
    @update:modelValue="congugations = data[selectedWord]"
  ></v-select>
  <v-card flat color="transparent">
    <v-card-title>
      <h2 class="text-h5">{{ capitalize(selectedWord) }}</h2>
    </v-card-title>
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col v-for="conjugation in congugations" :key="conjugation" cols="12" sm="4" align="center" justify="center">
          <v-card elevation="10" @click="playSound(selectedWord.toLowerCase(), conjugation.id)" :color="get_gender_color(conjugation.male_female)">
            <v-card-title>
              <h2 class="text-h2">{{ conjugation.ar }}</h2>
            </v-card-title>
            <v-card-text class="ma-0 pa-0">{{ conjugation.male_female }} / {{ conjugation.gaib_muhattab }} </v-card-text>
            <v-card-subtitle class="my-1">{{ conjugation.meaning }} </v-card-subtitle>
            <v-card-subtitle class="my-1">{{ conjugation.description }} </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import data from '../content/muttaride.json'

export default defineComponent({
  data() {
    return {
      data,
      words: [],
      selectedWord: '',
      congugations: [],
    }
  },
  created() {
    this.words = Object.keys(this.data)
    this.selectedWord = this.words[0]
    this.congugations = this.data[this.selectedWord]
  },

  methods: {
    playSound(path, id) {
      let fileType = 'wav'
      let src = `https://github.com/mokumus/cookie-dough/raw/master/public/sounds/${path}/${id}.${fileType}`
      const audio = new Audio(src)

      audio.play()
    },
    capitalize(s) {
      // capitilize and remove underscore
      return s[0].toUpperCase() + s.slice(1).replace(/_/g, ' ')
    },

    remove_underline(s) {
      return s.replace(/_/g, ' ')
    },
    get_gender_color(str) {
      // Müennes = dişi
      // Müzekker = erkek
      // Nefsi Mütekellim = biz
      switch (str) {
        case 'Müzekker':
          return 'blue'
        case 'Müennes':
          return 'pink'
        case 'Nefsi Mütekellim':
          return 'green'
        default:
          return 'grey'
      }
    }
  },
})
</script>

<style scoped></style>

<template>
  <v-select
    v-model="selectedVerb"
    :items="verbs"
    label="Fiil Seç"
    outlined
    dense
    class="mx-4"
    @update:modelValue="congugations = data[selectedVerb]"
  ></v-select>
  <v-card flat color="transparent">
    <v-card-title>
      <h2 class="text-h5">{{ capitalize(selectedVerb) }}</h2>
    </v-card-title>
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col v-for="conjugation in congugations" :key="conjugation" cols="12" sm="3" align="center" justify="center">
          <v-card elevation="10" @click="playSound(selectedVerb.toLowerCase(), conjugation.id)">
            <v-card-title>
              <h2 class="text-h2">{{ conjugation.ar }}</h2>
            </v-card-title>
            <v-card-text class="ma-0 pa-0">{{ conjugation.tr }} </v-card-text>
            <v-card-subtitle class="my-1">{{ conjugation.siga }} </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import data from '../content/eslestirme.json'

export default defineComponent({
  data() {
    return {
      data,
      verbs: [],
      selectedVerb: '',
      congugations: [],
    }
  },
  created() {
    this.verbs = Object.keys(this.data)
    this.selectedVerb = this.verbs[0]
    this.congugations = this.data[this.selectedVerb]
  },

  methods: {
    playSound(path, id) {
      let fileType = 'wav'
      let src = `https://github.com/mokumus/cookie-dough/raw/master/public/sounds/${path}/${id}.${fileType}`
      const audio = new Audio(src)

      audio.play()
    },
    capitalize(s) {
      return s[0].toUpperCase() + s.slice(1)
    },
  },
})
</script>

<style scoped></style>

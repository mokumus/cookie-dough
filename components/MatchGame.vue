<template>
  <v-container fluid class="pa-0">
    <v-row> </v-row>
    <v-row>
      <v-col cols="6">
        <v-item-group :selected-class="'selected-match-card'" v-model="selectionAr" :key="selectionAr">
          <v-row v-for="item in shuffledSampleAr" :key="item.id" justify="end" align="end">
            <v-item v-slot="{ isSelected, selectedClass, toggle }" :disabled="isMatched(item.id)">
              <MatchCard
                :item="item"
                lang="ar"
                @click="toggle(), handleMatch(item.id, 'ar'), playSound(currWord, item.id)"
                :class="['d-flex align-center', selectedClass]"
                :isSelected="isSelected"
                :isMatched="isMatched(item.id)"
              ></MatchCard>
            </v-item>
          </v-row>
        </v-item-group>
      </v-col>
      <v-col cols="6">
        <v-item-group selected-class="selected-match-card" v-model="selectionTr" :key="selectionTr">
          <v-row v-for="item in shuffledSampleTr" :key="item.id" justify="start" align="start">
            <v-item v-slot="{ isSelected, selectedClass, toggle }" :disabled="isMatched(item.id)">
              <MatchCard
                :item="item"
                :lang="matchBy"
                @click="toggle(), handleMatch(item.id, 'tr')"
                :class="['d-flex align-center', selectedClass]"
                :isSelected="isSelected"
                :isMatched="isMatched(item.id)"
              ></MatchCard>
            </v-item>
          </v-row>
        </v-item-group>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col align="end">
        <v-btn color="primary" size="large" @click="shuffle">Yenile</v-btn>
      </v-col>
      <v-col align="start">
        <v-select
          class="select"
          bg-color="select"
          variant="solo-filled"
          v-model="currWord"
          :items="words"
          density="compact"
          @update:modelValue="shuffle()"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from '../content/eslestirme.json'

export default defineComponent({
  props: {
    matchBy: String,
    required: false,
    default: 'tr',
  },

  data() {
    return {
      data,
      words: [],
      currWord: 'nasara',
      shuffledSampleTr: [],
      shuffledSampleAr: [],
      currentMatches: [],
      itemTr: null,
      itemAr: null,
      selectionTr: [],
      selectionAr: [],
    }
  },
  mounted() {
    this.words = Object.keys(this.data)
    this.shuffle()
  },
  methods: {
    shuffle() {
      this.shuffledSampleTr = this.data[this.currWord].sort(() => Math.random() - 0.5).slice(0, 6)
      this.shuffledSampleAr = JSON.parse(JSON.stringify(this.shuffledSampleTr)).sort(() => Math.random() - 0.5)
      this.currentMatches = []
      this.itemTr = null
      this.itemAr = null
      this.selectionTr = []
      this.selectionAr = []
      this.clearSelection()
    },
    handleMatch(id, lang) {
      if (lang === 'tr') {
        // use deep copy of the original array
        this.itemTr = parseInt(this.shuffledSampleTr.find((item) => item.id === id).id)
      } else {
        this.itemAr = parseInt(this.shuffledSampleAr.find((item) => item.id === id).id)
      }

      if (this.itemTr && this.itemAr) {
        if (this.itemTr === this.itemAr) {
          
          this.currentMatches.push(this.itemTr)
        }

        this.clearSelection()
      }
    },

    isMatched(id) {
      return this.currentMatches.includes(parseInt(id))
    },

    clearSelection() {
      this.itemTr = null
      this.itemAr = null
      this.selectionTr = []
      this.selectionAr = []
    },
    playSound(path, id) {
      let fileType = 'wav'
      let src = `https://github.com/mokumus/cookie-dough/raw/master/public/sounds/${path}/${id}.${fileType}`
      const audio = new Audio(src)

      audio.play()
    },
  },
})
</script>
<style scoped>
.selected-match-card {
  background-color: #c5e1a5 !important;
}
.select {
  width: 150px !important;
}
</style>

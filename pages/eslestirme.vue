<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-item-group selected-class="bg-primary" v-model="selectionTr">
          <v-row v-for="item in shuffledSampleTr" :key="item.id" justify="end" align="end">
            <v-item v-slot="{ isSelected, selectedClass, toggle }" :disabled="isMatched(item.id)">
              <MatchCard :item="item" lang="tr" @click="toggle(), handleMatch(item.id, 'tr')" :class="['d-flex align-center', selectedClass]" :isSelected="isSelected" :isMatched="isMatched(item.id)"></MatchCard>
            </v-item>
          </v-row>
        </v-item-group>
      </v-col>
      <v-col cols="6">
        <v-item-group :selected-class="'bg-primary'" v-model="selectionAr">
          <v-row v-for="item in shuffledSampleAr" :key="item.id" justify="start" align="start">
          <v-item v-slot="{ isSelected, selectedClass, toggle }" :disabled="isMatched(item.id)">
            <MatchCard :item="item" lang="ar" @click="toggle(), handleMatch(item.id, 'ar')" :class="['d-flex align-center', selectedClass]" :isSelected="isSelected" :isMatched="isMatched(item.id)"></MatchCard>
          </v-item>
        </v-row>
        </v-item-group>

      </v-col>
    </v-row>
    <v-row class="mt-5" justify="center" align="center">
        <v-btn color="primary" size="large"  @click="shuffle">Yenile</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import data from '../content/eslestirme.json'

export default defineComponent({
  data() {
    return {
      data,
      shuffledSampleTr: [],
      shuffledSampleAr: [],
      currentMatches: [],
      itemTr: null,
      itemAr: null,
      selectionTr: null,
      selectionAr: null,
    }
  },
  mounted() {
    this.shuffle()
  },
  methods: {
    shuffle() {
      // Shuffle the data and get 8 items
      this.shuffledSampleTr = this.data.sort(() => Math.random() - 0.5).slice(0, 8)
      // Shuffle Tr array from a deep copy of the original array
      this.shuffledSampleAr = JSON.parse(JSON.stringify(this.shuffledSampleTr)).sort(() => Math.random() - 0.5)
      this.currentMatches = []
      this.itemTr = null
      this.itemAr = null
      this.selectionTr = null
      this.selectionAr = null
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
          console.log('Matched', this.itemTr, this.itemAr)
          this.currentMatches.push(this.itemTr)
          //  CLEAR SELECTED ITEMS
          this.selectionTr = null
          this.selectionAr = null
          
        } else {
          console.log('Not matched', this.itemTr, this.itemAr)
        }
      }
    },

    isMatched(id){
      return this.currentMatches.includes(id)
    }
  },
})
</script>
>

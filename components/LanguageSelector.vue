<script setup>
const { locale } = useI18n()
</script>

<template>
  <v-card class="text-center d-flex flex-column" color="transparent" flat>
    <v-btn v-if="locale === 'en'" @click="locale = 'tr'"><img width="24" height="24" src="/us.svg"></v-btn>
    <v-btn v-else @click="locale = 'en'"><img width="24" height="24" src="/tr.svg"></v-btn>
  </v-card>
</template>

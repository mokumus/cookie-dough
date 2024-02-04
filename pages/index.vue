<template>
  <v-container fluid fill-height>
    <v-row>
      <v-col>
        <v-card elevation="10" to="/hadis" height="150">
          <v-card-title>
            <h2 class="text-h5">Hadisler</h2>
          </v-card-title>
          <v-card-text>
            <p>Kütüb-i Sitte</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="10" to="/eslestirme" height="150">
          <v-card-title>
            <h2 class="text-h5">Emsile (Fiil Eşleştirme)</h2>
          </v-card-title>
          <v-card-text>
            <p>Arapça alıştırma</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col >
        <v-card elevation="10" to="/hadis-english" height="150">
          <v-card-title>
            <h2 class="text-h5">İngilizce Hadis</h2>
          </v-card-title>
          <v-card-text>
            <p>İmam Buhari, İmam Müslim, Ebu Davud, Tirmizi, Nesai, İbn Mace</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {},

  methods: {},
}
</script>

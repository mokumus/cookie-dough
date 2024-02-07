<template>
  <v-container fluid fill-height>
    <v-defaults-provider
      :defaults="{ VCard: { color: 'indexCard', elevation: '10', height: '150' }, VCol: { cols: '12', sm: '6' } }"
    >
      <v-row>
        <v-col>
          <v-card to="/eslestirme">
            <v-card-title>
              <h2 class="text-h5">Emsile (Fiil Eşleştirme)</h2>
            </v-card-title>
            <v-card-text>
              <p>Arapça alıştırma</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card to="/eslestirme-siyga">
            <v-card-title>
              <h2 class="text-h5">Emsile (Siga)</h2>
            </v-card-title>
            <v-card-text>
              <p>Arapça alıştırma</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card to="/hadis">
            <v-card-title>
              <h2 class="text-h5">Hadisler</h2>
            </v-card-title>
            <v-card-text>
              <p>Kütüb-i Sitte</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
          <v-card to="/hadis-english">
            <v-card-title>
              <h2 class="text-h5">İngilizce Hadis</h2>
            </v-card-title>
            <v-card-text>
              <p>İmam Buhari, İmam Müslim, Ebu Davud, Tirmizi, Nesai, İbn Mace</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-defaults-provider>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  mounted() {},

  methods: {},
}
</script>

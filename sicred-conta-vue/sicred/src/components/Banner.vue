

<template>
  <v-container fluid class="banner-container">
    <v-row>
      <v-col cols="12">
        <v-img src="https://www.sicredi.com.br/media/produtos/filer_public_thumbnails/filer_public/2024/06/28/banner-seja-associado-sicredi-ana-castela.png__1717x768_subsampling-2.webp" class="banner-image"></v-img>
        <div class="banner-text">
          <h1>Não é só dinheiro, é ter com quem contar</h1>
          <p>Abra sua conta com a gente e peça seu cartão, sujeito à análise de crédito.</p>
          <v-form>
            <v-text-field label="Nome completo" required></v-text-field>
            <v-btn color="green lighten-1">Abrir conta</v-btn>
          </v-form>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.banner-container {
  position: relative;
}

.banner-image {
  width: 100%;
  height: auto;
}

.banner-text {
  position: absolute;
  top: 20%;
  left: 10%;
  color: white;
}

.banner-text h1 {
  font-size: 2.5rem;
}

.banner-text p {
  font-size: 1.2rem;
}

v-form {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  max-width: 300px;
}
</style>

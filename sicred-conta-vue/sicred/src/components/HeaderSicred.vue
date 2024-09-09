<template>
  <v-app-bar app color="white" dense>
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-space-between align-center">
          <v-row align="center">
            <v-img
              src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo.png"
              height="50"
            ></v-img>
            <div class="ml-3">
              <v-breadcrumbs>
                <v-breadcrumbs-item href="#">Página inicial</v-breadcrumbs-item>
                <v-breadcrumbs-item disabled>Seja Associado</v-breadcrumbs-item>
              </v-breadcrumbs>
            </div>
          </v-row>
          <v-btn color="green darken-2" dark> Abrir conta </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
.ml-3 {
  margin-left: 16px;
}
</style>

<template>
  <v-container>
    <h2 class="text-center">Vantagens de ser associado</h2>
    <v-row>
      <v-col cols="12" md="4" v-for="(benefit, index) in benefits" :key="index">
        <v-card>
          <v-card-title>{{ benefit.title }}</v-card-title>
          <v-card-text>{{ benefit.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      benefits: [
        { title: 'Benefício 1', text: 'Descrição do benefício 1' },
        { title: 'Benefício 2', text: 'Descrição do benefício 2' },
        { title: 'Benefício 3', text: 'Descrição do benefício 3' },
      ],
    };
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados conforme necessário */
</style>

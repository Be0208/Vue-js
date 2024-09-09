<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
        <v-card>
          <v-img :src="card.image" height="200px"></v-img>
          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text>{{ card.text }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" :href="card.link">Saiba Mais</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { image: 'card-image-1', title: 'Título 1', text: 'Descrição 1', link: '#' },
        { image: 'card-image-2', title: 'Título 2', text: 'Descrição 2', link: '#' },
        { image: 'card-image-3', title: 'Título 3', text: 'Descrição 3', link: '#' },
      ],
    };
  },
};
</script>

<style scoped>
/* Adicione estilos personalizados conforme necessário */
</style>

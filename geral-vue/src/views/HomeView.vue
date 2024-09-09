<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCars } from '@/services/apiCars'
import CardItem from '@/components/CardItem.vue'
import type { CarType } from '@/types/Car'

const cars = ref<CarType[]>([])

async function handleGetCars() {
  const response = await getCars()

  if (response.carros) {
    cars.value = response.carros
  }
}

onMounted(() => {
  handleGetCars()
})
</script>

<template>
  <div class="container-home">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/create">cadastrar</RouterLink>
        <RouterLink to="/create-car">cadastrar Carro</RouterLink>
      </nav>
    </header>

    <div class="content pa-13">
      <h1 class="mb-4">Consumo da Minha API carros</h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="item in cars" :key="item.marca">
          <CardItem :data="item" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.v-row{
  margin: 0;
  padding: 0;
}
.container-home {
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #8d99ae;
  height: 15%;
  padding: 40px;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  text-decoration: none;
  color: black;
  font-weight: 700;
}

.content {
  height: 85%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards-container {
  padding: 40px;
}

.card {
  border: 2px solid;
  padding: 20px;
  margin: 20px;
}
</style>

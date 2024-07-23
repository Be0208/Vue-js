<script setup lang="ts">
import { doGet } from '@/services/api'
import type { PeopleType } from '@/types/People'
import { onMounted, ref, watch } from 'vue'
import CardItem from '@/components/CardItem.vue'
import { getCars } from '@/services/apiCars'
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
    <div class="content">
      <h1>Consumo da Minha API carros</h1>
      <div class="cards-container">
        <div v-for="item in cars" :key="item.id" class="card">
          <p>{{ item.marca }}</p>
          <p>{{ item.modelo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

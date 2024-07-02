<script setup lang="ts">
import type { CarType } from '@/types'

defineProps<{
  cars: CarType[]
}>()
</script>

<template>
  <div>
    <div v-if="!cars.length">Nenhum produto cadastrado.</div>
    <div v-else class="card-container">
      <div class="card" v-for="carro in cars" :key="carro.id">
        <h2>{{ carro.marca }}</h2>
        <h2>{{ carro.modelo }}</h2>
      </div>
    </div>
  </div>
</template>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 150px;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  background-color: #fff;
}

.card h2 {
  margin: 0;
}
</style>

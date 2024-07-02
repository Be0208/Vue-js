<script setup lang="ts">
import CarsList from '@/components/CarsList.vue'
import FooterSite from '@/components/FooterSite.vue'
import MenuSite from '@/components/MenuSite.vue'
import { doGet } from '@/services/apiCars'
import type { CarType } from '@/types'
import checkLogged from '@/utils/checkLogged'
import { onMounted, ref } from 'vue'

const car = ref<CarType[]>([])

const getData = async () => {
  const data = await doGet('/cars')

  car.value = data.carros
}

onMounted(() => {
  getData()
  checkLogged('/cars')
})

</script>

<template>
  <MenuSite />
  <main>
    <h1>Lista de carros:</h1>

    <div class="wrapper-cards">
      <CarsList :cars="car" />
    </div>
  </main>
  <FooterSite />
</template>

<style>
.wrapper-cards {
  display: flex;
  flex-wrap: wrap;
}

main {
  margin: 0px 20px;
}
</style>

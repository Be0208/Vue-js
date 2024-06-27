<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { doGet } from '@/services/api'
import { type PeopleType } from '@/types'
import CardPeople from '@/components/CardPeople.vue'

const people = ref<PeopleType[]>([])

const getData = async () => {
  const data = await doGet('/people')

  if (data.length) {
    people.value = data
  }
}
onMounted(getData)

watch(people, () => {
  console.log(people)
})
</script>

<template>
  <div class="container-home">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/users">Users</RouterLink>
      </nav>
    </header>

    <div class="content-home">
      <h1>CONSUMO API PESSOAS</h1>
      <div class="cards-container-home">
        <div v-for="item in people" :key="item.id" class="cards">
          <CardPeople :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container-home {
  height: 100vh;
  margin: 0px;
  display: flex;
  flex-direction: column;
}

header {
  background-color: #8d99ae;
  padding: 40px;
}

nav {
  display: flex;
  gap: 20px;
}

a {
  color: black;
  font-weight: 700;
}

.content-home {
  height: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: black;
  font-weight: 700;
}

.cards-container-home {
  padding: 20px;
}

.cards {
  border: 2px solid black;
  padding: 20px;
  background-color: #87a8e2;
}
</style>

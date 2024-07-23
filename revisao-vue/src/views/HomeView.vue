<script setup lang="ts">
import { doGet } from '@/services/api'
import type { PeopleType } from '@/types/People'
import { onMounted, ref, watch } from 'vue'
import CardItem from '@/components/CardItem.vue'

const people = ref<PeopleType[]>([])

async function getPeople() {
  const data = await doGet('https://6495dc81b08e17c91792c92d.mockapi.io/api/v1/people')
  people.value = data
}

onMounted(() => {
  getPeople()
})

watch(people, () => {
  console.log('valor alterado', people)
})
</script>

<template>
  <div class="container-home">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <div class="content pa-13">
      <h1 class="mb-4">Consumo api pessoas</h1>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="item in people" :key="item.id">
          <CardItem :data="item" />
        </v-col>
      </v-row>
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
  /* padding: 50px; */
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

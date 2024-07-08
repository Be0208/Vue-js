<script setup lang="ts">
import { createCars } from '@/services/apiCars'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const marca = ref<string>('')
const modelo = ref<string>('')

const router = useRouter()

async function handleCreate() {
  const responseApi = await createCars(marca.value, modelo.value)

  if (responseApi) {
    router.push('/')
  }
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/create-car">cadastrar Carro</RouterLink>
    </nav>
  </header>
  <div class="content">
    <h1>Cadastre seus Carros</h1>
    <div class="form">
      <label>Marca:</label>
      <input class="form-input" v-model="marca" type="text" />

      <label>Modelo:</label>
      <input class="form-input" v-model="modelo" type="text" />

      <button class="btn" v-on:click="handleCreate">Cadastrar Carro</button>
    </div>
  </div>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  padding: 10px;
  background-color: blue;
  border: none;
  color: white;
  border-radius: 21px;
}

.form-input {
  padding: 10px;
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
</style>

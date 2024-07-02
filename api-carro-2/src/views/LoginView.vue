<script setup lang="ts">
import FooterSite from '@/components/FooterSite.vue'
import { login } from '@/services/apiCars'
import checkLogged from '@/utils/checkLogged'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref<string>('')
const password = ref<string>('')
const router = useRouter()

async function handleLogin() {
  const responseLogin = await login(email.value, password.value)
  if (responseLogin) {
    router.push('/cars')
  }
}

onMounted(() => checkLogged('cars'))
</script>

<template>
  <main>
    <h1>Login</h1>
    <div>
      <label>E-mail:</label>
      <input type="text" v-model="email" />

      <label>Password:</label>
      <input type="password" v-model="password" />
    </div>
    <button @click="handleLogin" type="button">Login</button>
  </main>
  <FooterSite />
</template>

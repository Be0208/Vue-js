<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createAthor } from '@/services/api'

const name = ref<string>('')

const router = useRouter()

async function handleCreate() {
  const responseApi = await createAthor(name.value)

  if (responseApi) {
    router.push('/')
  }
}
</script>

<template>
  <main>
    <h2>Add Author</h2>
    <div>
      <label for="name">Nome:</label>
      <input type="text" v-model="name" />

      <button type="button" @click="handleCreate">Add</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { PeopleType } from '@/types'

interface CardPeopleProps {
  data: PeopleType
}

defineProps<CardPeopleProps>()

const formatDate = (date: string) => {
  return date.substring(0, 10)
}
</script>

<template>
  <img :src="data.avatar" alt="fotoPerfil" />
  <h2>{{ data.name }} {{ data.last_name }}</h2>
  <p>Data Criação: {{ formatDate(data.createdAt) }}</p>
  <p>Telefone: {{ data.phone }}</p>
</template>


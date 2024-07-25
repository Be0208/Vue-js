<script setup lang="ts">
import type { CarType } from '@/types/Car'

defineProps<{
  data: CarType
}>()
</script>

<template>
  <v-card :title="data.marca" :subtitle="data.modelo" variant="tonal"></v-card>
</template>

<script setup lang="ts">
import type { CarType } from '@/types/Car'

defineProps<{
  data: CarType
}>()
</script>

<template>
  <v-card
    :title="data.modelo"
    :subtitle="data.marca"
    variant="tonal"
    class="d-flex w-100 h-100"
  ></v-card>
</template>

<style>
.v-card {
  justify-content: center;
}
</style>

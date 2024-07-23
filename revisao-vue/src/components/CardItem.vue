<script setup lang="ts">
import type { PeopleType } from '@/types/People'

defineProps<{
  data: PeopleType
}>()
</script>

<template>
  <v-card :title="data.name" :subtitle="data.createdAt" :text="data.phone" variant="tonal"></v-card>
</template>

<script setup lang="ts">
import type { PeopleType } from '@/types/People';


defineProps<{
  data: PeopleType
}>()

</script>


<template>
        <h2> {{data.name }} {{ data.last_name }}</h2>
        <p>Data Criacao: {{data.createdAt }}</p>
        <p>Telefone: {{ data.phone }}</p>
</template>
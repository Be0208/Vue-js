<script setup lang="ts">
interface TitlePageProps {
  title: string
}
defineProps<TitlePageProps>()
</script>

<template>
  <div>
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<style>
.title {
  color: #6681cc;
  font-weight: 800;
}
</style>

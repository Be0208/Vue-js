<script setup lang="ts">
interface AboutPageProps {
  text: string
}
defineProps<AboutPageProps>()
</script>

<template>
  <div class="about">
    <h1>{{ text }}</h1>
  </div>
</template>

<style></style>

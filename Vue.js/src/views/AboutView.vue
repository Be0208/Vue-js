<script setup lang="ts">
import TitlePage from '@/components/TitlePage.vue'
</script>

<template>
  <div>
    <TitlePage title="Entre em contato conosco." />

    <div class="about">
      <h1>This is an about page</h1>
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
}
</style>

<script setup lang="ts">
import ContentPage from '@/components/ContentPage.vue'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/create-car">cadastrar Carro</RouterLink>
    </nav>
  </header>
  <ContentPage
    title-page="TRABALHE CONOSCO"
    img-url="https://www.growdev.com.br/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffoto_trabalhe_conosco.367a9372.png&w=640&q=75"
    description="Faça parte do nosso time e venha mudar
a vida de profissionais e organizações!"
    title-button="FAZER PARTE DA GROWDEV"
  />
</template>

<style></style>

<script setup lang="ts">
import MenuApp from '@/components/Menu.vue';
import FooterApp from '@/components/Footer.vue';
import CardMidia from '@/components/CardMidia.vue';
</script>

<template>
  <MenuApp />
  <main>
    <h1>Sobre nós</h1>

    <CardMidia>
      <template #midia>aq seria a midia do card </template>
      Aqui vai meu conteudo
    </CardMidia>
  </main>
  <FooterApp />
</template>

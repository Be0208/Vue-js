<script setup lang="ts">
import MenuApp from '@/components/Menu.vue';
import FooterApp from '@/components/Footer.vue';
import ProductsList from '@/components/ProductsList.vue'; // esse é meu slot

// para o meu data:
import type { ProductType } from '@/types';
import { ref } from 'vue';

const data = ref<ProductType[]>([
  {
    id: '1',
    name: 'caderno',
    value: 10
  },
  {
    id: '2',
    name: 'lapis',
    value: 2
  }
]);
</script>

<template>
  <MenuApp />

  <main>
    <h1>lista de Produtos</h1>
    <ProductsList :products="data">
      <template #header>
        <p>aqui iria a minha descrição no slot header</p>
      </template>
    </ProductsList>
  </main>

  <FooterApp />
</template>

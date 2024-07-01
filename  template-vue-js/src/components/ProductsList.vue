<script setup lang="ts">
import type { ProductType } from '@/types/ProductsType';

defineProps<{
  products: ProductType[];
}>();
</script>

<template>
  <slot name="header"></slot>
  <div>
    <div v-if="!products.length">Nenhum produto encontrado</div>
    <!--  v-if nos tras uma condição para a div aparecer  -->

    <div v-else class="item" v-for="product of products" :key="product.id">
      <!--  essa key precisa ser um caracter unico -->
      <h2>{{ product.name }}</h2>
      <p>{{ product.description || 'sem descrição' }}</p>
    </div>
  </div>
</template>

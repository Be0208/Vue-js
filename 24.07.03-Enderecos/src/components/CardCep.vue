<script setup lang="ts">
interface CepTypeProps {
  data: CepType
}

defineProps<CepTypeProps>()
</script>

<template>
  <div class="card">
    <h1>Localidade: {{ data.localidade }}, UF: {{ data.uf }}</h1>
    <p>Logradouro: {{ data.logradouro }}, Bairro: {{ data.bairro }}, Cep: {{ data.cep }}</p>
    <p>DDD: {{ data.ddd }}, IBGE: {{ data.ibge }}</p>
  </div>
</template>
<style scoped>
.card {
  font-size: 1rem;
  max-width: 60vh;
  max-height: 40vh;
  background-color: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 0.375rem;
  margin: 1rem;
  padding: 3rem;
}

.card p {
  color: rgb(63, 63, 63);
}
h1 {
  font-weight: 500;
}
</style>

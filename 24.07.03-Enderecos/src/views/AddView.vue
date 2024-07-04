<script setup lang="ts">
import { ref, watch } from 'vue'
import { getDataCEP } from '@/services/api'
import { RouterLink } from 'vue-router'

const cep = ref<string>('')
const logradouro = ref<string>('')
const bairro = ref<string>('')
const localidade = ref<string>('')
const uf = ref<string>('')
const ibge = ref<string>('')
const ddd = ref<string>('')

watch(cep, async (novoCep) => {
  if (novoCep.length === 8) {
    const data = await getDataCEP(novoCep)

    if (!data.erro) {
      logradouro.value = data.logradouro
      bairro.value = data.bairro
      localidade.value = data.localidade
      uf.value = data.uf
      ibge.value = data.ibge
      ddd.value = data.ddd
    } else {
      alert('CEP não encontrado')
    }
  }
})
function salvarNoStorage() {
  let ceps: CepType[] = []

  if (localStorage.getItem('ceps') !== null) {
    ceps = JSON.parse(localStorage.getItem('ceps') || '[]')
  }

  const endereco: CepType = {
    cep: cep.value,
    logradouro: logradouro.value,
    bairro: bairro.value,
    localidade: localidade.value,
    uf: uf.value,
    ibge: ibge.value,
    ddd: ddd.value
  }

  if (cep.value.length !== 8 || !localidade.value || !uf.value || !ddd.value) {
    alert('Dados inválidos')
    return
  }

  ceps.push(endereco)

  localStorage.setItem('ceps', JSON.stringify(ceps))
  alert('Endereço salvo com sucesso!')
}
</script>

<template>
  <h1>Cadastrar</h1>
  <div class="cards-container">
    <div class="label-card">
      <label for="cep">CEP: </label>
      <input type="text" placeholder="Ex: 93334000" v-model="cep" />
      <span v-if="(cep.length < 8 || cep.length > 8) && cep.length > 0">Insira um CEP válido</span>
    </div>

    <div class="label-card">
      <label for="Log">Logradouro: </label>
      <input type="text" v-model="logradouro" />
    </div>
    <div class="label-card">
      <label for="Log">Bairro: </label>
      <input type="text" v-model="bairro" />
    </div>
    <div class="label-card">
      <label for="Log">Localidade: </label>
      <input type="text" v-model="localidade" />
    </div>
    <div class="label-card">
      <label for="Log">UF: </label>
      <input type="text" v-model="uf" />
    </div>
    <div class="label-card">
      <label for="Log">IBGE: </label>
      <input type="text" v-model="ibge" />
    </div>
    <div class="label-card">
      <label for="Log">DDD: </label>
      <input type="text" v-model="ddd" />
    </div>
    <button @click="salvarNoStorage" class="button-23" role="button">Salvar</button>

    <RouterLink to="/"><button class="button-84" role="button">Voltar</button></RouterLink>
  </div>
</template>

<style scoped>
.button-23 {
  background-color: #ffffff;
  border: 0.0625rem solid #222222;
  border-radius: 0.5rem;
  box-sizing: border-box;
  color: #222222;
  cursor: pointer;
  display: inline-block;
  font-family:
    Circular,
    -apple-system,
    BlinkMacSystemFont,
    Roboto,
    'Helvetica Neue',
    sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  margin: 0;
  outline: none;
  padding: 0.8125rem 1.4375rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition:
    box-shadow 0.2s,
    -ms-transform 0.1s,
    -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  align-self: start;
  width: 25vh;
}

.button-23:focus-visible {
  box-shadow:
    #222222 0 0 0 0.125rem,
    rgba(255, 255, 255, 0.8) 0 0 0 0.25rem;
  transition: box-shadow 0.2s;
}

.button-23:active {
  background-color: #f7f7f7;
  border-color: #000000;
  transform: scale(0.96);
}

.button-23:disabled {
  border-color: #dddddd;
  color: #dddddd;
  cursor: not-allowed;
  opacity: 1;
}

.cards-container {
  padding: 32px;
  margin: auto;
}

.label-card {
  margin-bottom: 7.6px;
}

.label-card span {
  color: rgba(255, 0, 0, 0.863);
  font-size: small;
  font-weight: 100;
}

input {
  width: 100%;
  height: 2rem;
  font-size: large;
}

h1 {
  text-align: center;
}

.cards-container {
  max-width: 80vh;
  display: flex;
  flex-direction: column;
}
</style>

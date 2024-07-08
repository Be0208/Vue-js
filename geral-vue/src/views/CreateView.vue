
<script setup lang="ts">
import { createAccount } from '@/services/apiCars';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const router = useRouter()

async function handleCreate(){

  const responseApi = await createAccount(name.value, email.value, password.value)

  if(responseApi){
    router.push('/login')
  }

}
</script>



<template>
  <div class="content">
    <h1>Crie sua Conta</h1>
    <div class="form">
      <label>Nome:</label>
      <input class="form-input" v-model="name" type="text">

      <label>E-mail:</label>
      <input  class="form-input" v-model="email" type="text">

      <label>Senha:</label>
      <input  class="form-input" v-model="password" type="password">

      <button class="btn" v-on:click="handleCreate" >Criar Conta</button>
    </div>
  </div>

</template>


<style>
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form{
  display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn{
  padding: 10px;
    background-color: blue;
    border: none;
    color: white;
    border-radius: 21px;
}

.form-input{
  padding: 10px;
   
}

</style>
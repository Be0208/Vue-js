
<script setup lang="ts">
import { login } from '@/services/apiCars';
import { ref } from 'vue';
import {  useRouter } from 'vue-router';


const email = ref<string>('');
const password = ref<string>('');
const router = useRouter()

async function handleLogin(){

const responseApi = await login(email.value, password.value)

if(responseApi){
  router.push('/')
}

}

</script>


<template>
   <div class="content">
    <h1>Login</h1>
    <div class="form">
      <label>E-mail:</label>
      <input  class="form-input" v-model="email" type="text">

      <label>Senha:</label>
      <input  class="form-input" v-model="password" type="password">

      <button class="btn" v-on:click="handleLogin"  >Login</button>
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
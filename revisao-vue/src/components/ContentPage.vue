<script setup lang="ts">

interface ContentPageProps {
  titlePage: string;
  description: string;
  titleButton: string;
  imgUrl: string; 
}

defineProps<ContentPageProps>()


</script>

<template>
 <div class="container">
    <div>
     <h1>{{ titlePage }}</h1>
       
      <p>{{ description }}</p>
      <button class="btn">{{titleButton }}</button>
    </div>

    <div>
      <img class="img-content" :src="imgUrl" alt="">
    </div>
  </div>

</template>

<style>

.btn{
  background-color: #FF8533;
  padding: 16px 8px;
  color: white;
  border: none;
  font-weight: 700;
  border-radius: 8px;
  margin-top: 20px;
}


.container{
  display: flex;
  gap: 15px;
  margin: 100px;
}

.img-content{
  height: 400px;
  width: 700px;
}
</style>
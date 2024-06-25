<script setup lang="ts">
import TitlePage from './TitlePage.vue'

interface contentPageProps {
  titlePage: string
  description: string
  titleButton: string
  imgUrl: string
}
defineProps<contentPageProps>()
</script>

<template>
  <div class="container">
    <div>
      <TitlePage :title="titlePage" />
      <p>
        {{ description }}
      </p>
      <button class="btn">{{ titleButton }}</button>
    </div>

    <div>
      <img class="img-content" :src="imgUrl" alt="" />
    </div>
  </div>
</template>

<style>
.btn {
  background-color: #ff8533;
  color: white;
  border: none;
  font-weight: 700;
  border-radius: 8px;
  margin-top: 20px;
}

.container {
  display: flex;
  gap: 15px;
  margin: 100px;
}

.img-content {
  height: 400px;
  width: 700px;
}
</style>

<script setup lang="ts">
interface TitlePageProps {
  title: string
}
defineProps<TitlePageProps>()
</script>

<template>
  <div>
    <h1 class="contact">{{ title }}</h1>
    <hr class="title-line" />
  </div>
</template>

<style>
.contact {
  text-align: center;
  color: hsla(160, 100%, 37%, 1);
}

.title-line {
  background-color: grey;
  height: 3px;
  border: 0px;
}
</style>

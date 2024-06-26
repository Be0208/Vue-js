<script setup lang="ts">
import MenuApp from '@/components/Menu.vue';
import FooterApp from '@/components/Footer.vue';
import { onMounted, ref } from 'vue';
import { doGet } from '@/services/api';
import { type NoteType } from '@/types';

const notes = ref<NoteType[]>([]);
const test = ref<string>('helooo');

const getData = async () => {
  const data = await doGet('/notes');
  if (data.length) {
    notes.value = data;
  }
};

onMounted(getData);
</script>

<template>
  <MenuApp />
  <main>
    <h1>Notes</h1>
    <div class="card">
      <div v-for="item in notes" :key="item.id" class="note-card">
        <h3>Titulo: {{ item.title }}</h3>
        <p>Descrição: {{ item.description }}</p>
      </div>
    </div>
  </main>

  <FooterApp />
</template>

<style>
/* Estilo do main */
main {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
  margin: 20px;
}

/* Estilo do título principal */
main h1 {
  text-align: center;
  color: #333;
}

/* Estilo do container dos cards */
.card {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

/* Estilo de cada card de nota */
.note-card {
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: calc(33.333% - 20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

/* Efeito de hover nos cards */
.note-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Estilo dos títulos das notas */
.note-card h3 {
  margin-top: 0;
  color: #333;
  font-size: 1.2em;
}

/* Estilo das descrições das notas */
.note-card p {
  color: #666;
  font-size: 1em;
  line-height: 1.4;
}
</style>

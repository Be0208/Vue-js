<template>
  <v-app>
    <HeaderSicred />
    <v-main>
      <Banner />
      <CardsSection />
      <BenefitsSection />
    </v-main>
    <FooterSicred />
  </v-app>
</template>

<script>
import HeaderSicred from "@/components/HeaderSicred.vue";
import Banner from "@/components/Banner.vue";
import CardsSection from "./components/CardsSection.vue";
import BenefitsSection from "./components/BenefitsSection.vue";
import FooterSicred from "./components/FooterSicred.vue";

export default {
  components: {
    HeaderSicred,
    Banner,
    CardsSection,
    BenefitsSection,
    FooterSicred,
  },
};
</script>

<style>
/* Adicione estilos globais aqui */
</style>

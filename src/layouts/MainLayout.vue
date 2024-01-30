<script setup>
import HeaderComponent from "../components/layouts/main/HeaderComponent.vue";
import FooterComponent from "../components/layouts/main/FooterComponent.vue";
</script>
<template>
  <HeaderComponent/>
  <main>
    <router-view/>
  </main>
  <FooterComponent/>
</template>
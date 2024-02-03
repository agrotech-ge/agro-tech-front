<script setup>
import Header from "../components/main/Header.vue";
import Footer from "../components/main/Footer.vue";
</script>
<template>
  <Header/>
  <main class="relative">
    <RouterView/>
  </main>
  <Footer/>
</template>
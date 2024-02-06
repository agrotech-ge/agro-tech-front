<script setup>
import Header from "/src/components/header/Header.vue";
import Footer from "/src/components/footer/Footer.vue";
</script>

<template>
  <Header/>

  <main class="relative">
    <router-view/>
  </main>

  <Footer/>
</template>
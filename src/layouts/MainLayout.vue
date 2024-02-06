<script setup>
import HeaderComponent from "/src/components/header/HeaderComponent.vue";
import FooterComponent from "/src/components/footer/FooterComponent.vue";
</script>

<template>
  <header-component/>

  <main class="relative">
    <router-view/>
  </main>

  <footer-component/>
</template>
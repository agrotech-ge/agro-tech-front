<script setup>
import Logo from "/src/components/header/Logo.vue";
import NavLinks from "/src/components/header/NavLinks.vue";
import LangSwitch from "/src/components/header/LangSwitcher.vue";
</script>
<template>
  <header class="px-14 py-10 flex items-center justify-between">
    <logo/>
    <nav-links/>
    <lang-switch/>
  </header>
</template>
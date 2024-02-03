<script setup>
import Logo from "@/components/main/Logo.vue";
import NavLinks from "@/components/main/NavLinks.vue";
import LangSwitch from "@/components/main/LangSwitcher.vue";
</script>
<template>
  <header class="px-14 py-12 flex items-center justify-between">
    <logo/>
    <nav-links/>
    <lang-switch/>
  </header>
</template>
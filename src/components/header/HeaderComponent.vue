<script setup>
import Logo from "/src/components/header/Logo.vue"
import NavigationLinks from "/src/components/header/NavigationLinks.vue"
import LanguageSwitcher from "/src/components/header/LanguageSwitcher.vue"
</script>

<template>
  <header class="flex items-center justify-between px-14 py-10">
    <logo/>

    <navigation-links/>

    <language-switcher/>
  </header>
</template>
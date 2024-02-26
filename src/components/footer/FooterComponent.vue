<script setup>
import Contact from "./Contact.vue"
import NavigationLinks from "./NavigationLinks.vue"
import SocialLinks from "./SocialLinks.vue"
import Copyright from "./Copyright.vue"
</script>

<template>
  <footer class="px-14 py-14 bg-[#2E2E2E] flex flex-col gap-y-10">
    <div class="flex items-start gap-x-14">
      <img src="/src/assets/logos/agro-tech.svg" alt="agro tech logo">

      <div class="flex w-full justify-between">
        <contact/>

        <social-links/>

        <navigation-links/>
      </div>
    </div>

    <copyright/>
  </footer>
</template>
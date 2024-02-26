<script setup>
import Slogan from "/src/components/main/Slogan.vue"
import Listings from "/src/components/main/Listings.vue"
import Members from "/src/components/main/Members.vue"
</script>

<template>
  <slogan/>

  <div class="flex flex-col gap-y-36 px-16 pt-16 pb-24">
    <listings/>

    <members/>
  </div>
</template>
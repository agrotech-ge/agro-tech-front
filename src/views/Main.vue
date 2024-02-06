<script setup>
import Members from "/src/components/main/Members.vue"
import Listings from "/src/components/main/Listings.vue"
import BackgroundDescription from "/src/components/main/BackgroundDescription.vue"
</script>

<template>
  <background-description/>

  <div class="flex flex-col gap-y-36 px-14 pt-12 pb-24">
    <listings/>

    <members/>
  </div>
</template>
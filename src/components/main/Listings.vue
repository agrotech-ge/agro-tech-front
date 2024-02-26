<script setup>
import Listing from "./Listing.vue"
import useMain from "/src/composables/useMain.js"

const {tractors} = useMain()
</script>

<template>
  <section class="flex flex-col gap-y-12">
    <p class="border-b-2 border-b-secondary pb-10 text-[48px] text-secondary">განცხადებები</p>

    <div class="grid grid-cols-2 gap-x-16 gap-y-14">
      <Listing v-for="(tractor, index) in tractors" :key="index" :data="tractor"/>
    </div>
  </section>
</template>
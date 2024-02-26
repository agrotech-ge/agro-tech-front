<script setup>
import useMain from "/src/composables/useMain"
import Listing from "./Listing.vue"

const {tractors} = useMain()
</script>

<template>
  <section class="flex flex-col gap-y-14">
    <p class="border-b-2 pb-16 text-5xl font-medium border-b-secondary text-secondary">განცხადებები</p>

    <div class="grid grid-cols-2 gap-x-16 gap-y-14">
      <listing v-for="(tractor, index) in tractors" :key="index" :data="tractor"/>
    </div>
  </section>
</template>
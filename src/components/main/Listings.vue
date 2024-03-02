<script setup>
import Listing from "./Listing.vue"
import {useListingsStore} from '/src/stores/useListingsStore'

const store = useListingsStore()
</script>

<template>
  <section class="flex flex-col gap-y-14">
    <p class="border-b-2 pb-16 text-5xl font-medium border-b-secondary text-secondary">განცხადებები</p>

    <div class="grid grid-cols-2 gap-x-16 gap-y-14">
      <listing v-for="(tractor, index) in store.listings" :key="index" :data="tractor"/>
    </div>
  </section>
</template>
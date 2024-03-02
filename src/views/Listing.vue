<script setup>
import {useRoute} from "vue-router";
import {useListingsStore} from "../stores/useListingsStore"

const store = useListingsStore()
const route = useRoute()
const listing = store.listings.find(listing => listing.id === route.params.id)
</script>

<template>
  <section class="flex flex-col gap-y-32 px-16 pt-16 pb-24">
    <div class="flex  space-x-7">
      <img class="rounded-md" :src="listing?.images[0]" alt="listing image"/>

      <div class="space-y-7">
        <img class="rounded-md" v-for="(image, index) in listing?.images.slice(1)" :key="index" :src="image"
             alt="listing image"/>
      </div>

      <div class="border">

      </div>

    </div>
  </section>
</template>
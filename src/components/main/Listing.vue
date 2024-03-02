<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex gap-x-7 rounded shadow-xl p-1.5">
    <router-link :to="`/listings/${data?.id}`">
      <img class="rounded-md border border-secondary w-36 h-24" :src="data?.images[0]" alt="tractor image">
    </router-link>

    <div class="flex w-full flex-col justify-between">
      <p class="text-xs font-medium text-gray-500" v-text="data?.publish_date"/>

      <p class="font-semibold" v-text="data?.title"/>

      <div class="flex justify-between text-primary">
        <p class="font-bold" v-text="data?.price + ' $'"/>

        <router-link :to="`/listings/${data?.id}`" class="cursor-pointer font-medium underline">
          ნახვა
        </router-link>
      </div>
    </div>
  </div>
</template>
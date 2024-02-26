<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex gap-x-7 rounded border border-gray-400 p-1">
    <img :src="data?.photo" alt="tractor image">

    <div class="flex w-full flex-col justify-between">
      <p class="text-xs font-medium text-gray-500" v-text="data?.publishDate"/>

      <p class="font-semibold" v-text="data?.title"/>

      <div class="flex justify-between text-primary">
        <p class="font-bold" v-text="data?.price"/>

        <router-link to="/" class="cursor-pointer font-medium">ნახვა</router-link>
      </div>
    </div>
  </div>
</template>
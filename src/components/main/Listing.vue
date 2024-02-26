<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex gap-x-7 rounded shadow-xl p-1.5" v-if="data">
    <router-link to="/">
      <img class="transition hover:scale-105" :src="data?.photo" alt="tractor image">
    </router-link>

    <div class="flex w-full flex-col justify-between">
      <p class="text-xs font-medium text-gray-500" v-text="data?.publishDate"/>

      <p class="font-semibold" v-text="data?.title"/>

      <div class="flex justify-between text-primary">
        <p class="font-bold" v-text="data?.price"/>

        <router-link to="/" class="cursor-pointer font-medium underline">ნახვა</router-link>
      </div>
    </div>
  </div>

  <div class="flex gap-x-7 rounded shadow-xl p-1.5" v-else>
    <div class="skeleton w-36 h-20"/>

    <div class="flex w-full flex-col justify-between">
      <div class="skeleton w-20 h-3.5"/>

      <div class="skeleton w-full h-4"/>

      <div class="flex justify-between">
        <div class="skeleton w-24 h-3.5"/>

        <div class="skeleton w-20 h-3.5"/>
      </div>
    </div>
  </div>
</template>
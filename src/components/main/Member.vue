<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col gap-y-3.5" v-if="data">
    <img :src="data?.photo" alt="member image"/>

    <p class="font-medium" v-text="data?.name"/>

    <p class="text-xs font-medium" v-text="data?.description"/>
  </div>

  <div class="flex w-64 flex-col gap-4" v-else>
    <div class="aspect-square w-full skeleton"></div>
    <div class="h-4 w-28 skeleton"></div>
    <div class="h-4 w-full skeleton"></div>
    <div class="h-4 w-full skeleton"></div>
  </div>
</template>

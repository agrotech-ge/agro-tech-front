<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col gap-y-3.5">
    <img class="rounded" :src="data?.photo" alt="member image"/>

    <p class="font-medium" v-text="data?.name"/>

    <p class="font-medium text-xs" v-text="data?.description"/>
  </div>
</template>

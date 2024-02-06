<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex gap-x-7 border border-[#D9D9D9] rounded p-1">
    <img :src="data.photo" alt="tractor image">

    <div class="flex flex-col justify-between w-full">
      <p class="text-[#5C5C5C] font-medium text-[12px]" v-text="data.publishDate"/>

      <p class="font-semibold" v-text="data.title"/>

      <div class="flex justify-between text-primary">
        <p class="font-bold" v-text="data.price"/>

        <p class="font-medium">ნახვა</p>
      </div>
    </div>
  </div>
</template>
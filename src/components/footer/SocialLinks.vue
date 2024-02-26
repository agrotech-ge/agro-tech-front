<script setup>
import useNavigation from "/src/composables/useNavigation"

const {links} = useNavigation()
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <p class="text-4xl font-medium text-white">სოც. ქსელები</p>

    <div class="flex items-center justify-between">
      <a v-for="(link, index) in links" :key="index" :href="link.url" target="_blank" v-html="link.icon"/>
    </div>
  </div>
</template>
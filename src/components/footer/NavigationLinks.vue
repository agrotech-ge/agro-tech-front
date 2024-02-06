<script setup>
import useNavigation from "/src/composables/useNavigation.js"

const {routes} = useNavigation()
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <p class="text-white text-[40px]">ნავიგაცია</p>

    <nav class="flex flex-col gap-y-7">
      <router-link v-for="(route, index) in routes.slice(0, 4)" :key="index" :to="route.path"
                   class="text-xl font-medium text-primary" v-text="route.title"/>
    </nav>
  </div>
</template>
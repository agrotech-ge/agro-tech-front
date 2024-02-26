<script setup>
import useNavigation from "/src/composables/useNavigation"

const {routes} = useNavigation()
</script>

<template>
  <div class="flex flex-col gap-y-8">
    <p class="text-white font-medium text-4xl">ნავიგაცია</p>

    <nav class="flex flex-col gap-y-5">
      <router-link v-for="(route, index) in routes.slice(0, 4)" :key="index" :to="route.path"
                   class="text-lg font-medium text-primary" v-text="route.title"/>
    </nav>
  </div>
</template>
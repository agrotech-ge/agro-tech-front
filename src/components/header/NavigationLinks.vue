<script setup>
import {useRoute} from "vue-router"
import useNavigation from "/src/composables/useNavigation"
import {onMounted} from "vue"

const _route = useRoute()

const {routes, isAuthenticated, userName} = useNavigation()
onMounted(() => {
  if (isAuthenticated.value) {
    routes.value[4] = {
      title: userName,
      path: '#'
    }
  }
})
</script>

<template>
  <nav class="flex items-center gap-x-20 text-lg font-semibold">
    <router-link v-for="(route, index) in routes" :key="index" :to="route.path" class="pb-0.5"
                 :class="{
      'text-primary border-b border-b-primary': _route.path === route.path,
      'border border-black rounded px-3 !py-1' : isAuthenticated && index === 4
    }"
                 v-text="route.title"/>
  </nav>
</template>
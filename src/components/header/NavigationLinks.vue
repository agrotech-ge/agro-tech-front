<script setup>
import {useRoute} from "vue-router"
import useNavigation from "/src/composables/useNavigation"

const _route = useRoute()

const {routes} = useNavigation()
</script>

<template>
  <nav class="flex items-center gap-x-20 text-lg font-semibold">
    <router-link v-for="(route, index) in routes" :key="index" :to="route.path" class="pb-0.5"
                 :class="{'text-primary border-b border-b-primary': _route.path === route.path}"
                 v-text="route.title"/>
  </nav>
</template>
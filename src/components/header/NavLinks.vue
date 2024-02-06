<script setup>
import {ref} from "vue"
import {useRoute} from "vue-router"

const _route = useRoute()

const routes = ref([
  {
    title: 'მთავარი',
    path: '/main'
  },
  {
    title: 'განცხადებები',
    path: '/main/listings'
  },
  {
    title: 'ჩვენს შესახებ',
    path: '/main/about'
  },
  {
    title: 'კონტაქტი',
    path: '/main/contact'
  },
  {
    title: 'შესვლა',
    path: '/login'
  }
])
</script>

<template>
  <nav class="flex items-center gap-x-20">
    <router-link
        v-for="(route, index) in routes" :key="index"
        :to="route.path"
        class="font-semibold pb-0.5"
        :class="{ 'text-primary border-b border-b-primary': _route.path === route.path }"
        v-text="route.title"/>
  </nav>
</template>
<script setup>
import Member from "./Member.vue"
import useMain from "/src/composables/useMain.js"

const {members} = useMain()
</script>

<template>
  <div class="grid grid-cols-6 gap-x-10">
    <member v-for="(member, index) in members" :key="index" :data="member"/>
  </div>
</template>

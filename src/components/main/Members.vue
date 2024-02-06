<script setup>
import Member from "./Member.vue"
import useMain from "/src/composables/useMain.js"

const {members} = useMain()
</script>

<template>
  <div class="flex flex-col gap-y-16">
    <p class="text-secondary font-medium text-5xl">ჩვენი გუნდი</p>

    <div class="grid grid-cols-6 gap-x-10">
      <member v-for="(member, index) in members" :key="index" :data="member"/>
    </div>
  </div>
</template>

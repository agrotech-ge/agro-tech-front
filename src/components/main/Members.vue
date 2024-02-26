<script setup>
import useMain from "/src/composables/useMain"
import Member from "./Member.vue"

const {members} = useMain()
</script>

<template>
  <section class="flex flex-col gap-y-16">
    <p class="text-5xl font-medium text-secondary">ჩვენი გუნდი</p>

    <div class="grid grid-cols-6 gap-x-10">
      <member v-for="(member, index) in members" :key="index" :data="member"/>
    </div>
  </section>
</template>

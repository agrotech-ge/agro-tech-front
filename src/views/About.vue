<script setup>
import useMain from "../composables/useMain.js";

const {_members} = useMain()
</script>

<template>
  <div class="flex items-center justify-center pt-16 pb-32">
    <div class="w-1/2 flex flex-col gap-y-12 gap-x-5">
      <div :class="{'flex-row-reverse': index % 2 === 0}" class="flex gap-x-16" v-for="(member, index) in _members"
           :key="index">
        <img class="w-[646px] h-[424px]" :src="member.photo" alt="member image">

        <div class="w-1/2 flex flex-col gap-y-10 items-center">
          <p class="whitespace-nowrap text-2xl font-medium" v-text="member.name"/>

          <p class="text-center" v-text="member.description"/>
        </div>
      </div>
    </div>
  </div>
</template>
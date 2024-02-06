<script setup>
import {ref} from "vue";

const lang = ref('ka')
</script>

<template>
  <div class="flex items-center gap-x-2 font-medium">
    <p @click="lang = 'ka'" :class="{'text-primary':lang === 'ka'}" class="font-semibold cursor-pointer"
       v-text="'ქარ'"/>
    <div class="w-[1px] h-5 bg-black"/>
    <p @click="lang = 'en'" :class="{'text-primary':lang === 'en'}" class="font-semibold cursor-pointer"
       v-text="'ინგ'"/>
  </div>
</template>
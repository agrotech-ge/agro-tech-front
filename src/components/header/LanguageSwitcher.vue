<script setup>
import {ref} from "vue";

const language = ref('ka')
</script>

<template>
  <div class="flex items-center gap-x-2 font-medium">
    <p @click="language = 'ka'" :class="{'text-primary':language === 'ka'}" class="cursor-pointer font-semibold"
       v-text="'ქარ'"/>

    <div class="h-5 bg-black w-0.5"/>

    <p @click="language = 'en'" :class="{'text-primary':language === 'en'}" class="cursor-pointer font-semibold"
       v-text="'ინგ'"/>
  </div>
</template>
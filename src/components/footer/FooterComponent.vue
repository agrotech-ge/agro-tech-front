<template>
  <footer class="px-14 py-14 bg-[#2E2E2E] flex flex-col gap-y-10">
    <div class="flex items-start gap-x-14">
      <img src="/src/assets/logos/agro-tech.svg" alt="agro tech logo">
      <div class="flex w-full justify-between">
        <div class="flex flex-col gap-y-8 text-white">
          <p class="font-medium text-[40px]">
            კონტაქტი
          </p>
          <p class="text-xl">
            ელ. ფოსტა: <span class="font-semibold">agrotech@gmail.com</span>
          </p>
          <p>
            ტელ: <span class="font-semibold">(+995) 599-11-12-22</span>
          </p>
        </div>
        <div class="flex flex-col gap-y-8">
          <p class="font-medium text-white text-[40px]">სოც. ქსელები</p>
          <div class="flex items-center">
            <img src="/src/assets/logos/facebook.svg" alt="facebook logo">
          </div>
        </div>
        <navigation-links/>
      </div>
    </div>
    <div class="w-full border-t-2 border-t-[#434343] pt-5">
      <p class="text-sm font-medium text-white">© Copyright 2024 Agrotech - All Rights Reserved</p>
    </div>
  </footer>
</template>
<script setup>
import {ref} from "vue";
import NavigationLinks from "./NavigationLinks.vue";

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
  }
])
</script>
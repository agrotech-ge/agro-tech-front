<script setup>
import {onMounted, ref} from "vue";

const show = ref(false)
onMounted(() => setTimeout(() => show.value = true, 500))
</script>
<template>
  <img src="/src/assets/images/main-bg.svg" class="aspect-auto w-full" alt="main bg">

  <div class="absolute top-40 left-14 font-medium text-white">
    <transition>
      <p v-if="show" class="w-fit bg-black bg-opacity-70 px-8 py-2 text-[64px]">აგროტექი</p>
    </transition>

    <transition>
      <p v-if="show" class="my-10 bg-black bg-opacity-70 px-8 py-3 text-[40px]">ტრაქტორების გაყიდვისა და გაქირავების
        სერვისი</p>
    </transition>
  </div>
</template>

<style scoped>
.v-enter-active {
  transition: all 0.5s ease-in-out;
}

.v-enter-from {
  opacity: 0;
  transform: translateX(50%);
}
</style>
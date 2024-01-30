<template>
  <div class="relative">
    <img @click="showPassword = !showPassword" class="absolute top-[15px] right-[15px] hover:cursor-pointer"
         :src="showPassword ? '/src/assets/icons/auth/hide-password-icon.svg' : '/src/assets/icons/auth/show-password-icon.svg'"
         alt="show-hide password icon">
    <input
        @focusin="focused = true"
        @focusout="focused = false"
        v-model="value"
        :placeholder="!focused ? placeholder : ''"
        class="w-full hover:cursor-pointer focus:cursor-auto placeholder-black font-medium hover:border-primary focus:outline-primary border-black border-2 rounded-[5px] p-[15px]"
        :type="showPassword ? 'text' : 'password'"/>
    <transition>
      <label
          v-if="focused || value"
          :class="!focused && value ? '!text-black' : ''"
          class="text-primary absolute -top-2 left-2.5 px-[5px] text-[10px] font-bold bg-white" v-text="placeholder"/>
    </transition>
  </div>
</template>

<script setup>
import {ref} from "vue";

defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});

const showPassword = ref(false);
const value = defineModel();
const focused = ref(false);
</script>
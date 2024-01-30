<script setup>
import {ref} from "vue";

const show = ref(false);
const email = ref('');
const password = ref('');

const togglePassword = () => {
  show.value = !show.value;
};

const emailFocused = ref(false);
const passwordFocused = ref(false);
</script>
<template>
  <form method="post">
    <h1 class="text-[32px] mb-[50px] font-bold">ავტორიზაცია</h1>
    <div class="relative w-full mb-[50px]">
      <input
          @focusin="emailFocused = true"
          @focusout="emailFocused= false"
          v-model="email"
          :placeholder="!emailFocused ? 'ელ. ფოსტა' : ''"
          class="placeholder hover:cursor-pointer focus:cursor-auto placeholder-black font-medium hover:border-primary focus:outline-primary border-black border-2 rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          type="text"/>
      <transition>
        <label
            v-if="emailFocused || email"
            :class="!emailFocused && email ? 'text-black' : ''"
            class="text-primary absolute -top-1.5 left-3 px-1 text-[10px] font-bold bg-white">ელ. ფოსტა</label>
      </transition>
    </div>
    <div class="relative w-full mb-5">
      <img @click="togglePassword" class="absolute w-5 h-5 top-2.5 right-2.5 hover:cursor-pointer"
           :src="show ? '/src/assets/icons/auth/hide-password-icon.svg' : '/src/assets/icons/auth/show-password-icon.svg'"
           alt="">
      <input
          @focusin="passwordFocused = true"
          @focusout="passwordFocused= false"
          v-model="password"
          :placeholder="!passwordFocused ? 'პაროლი' : ''"
          class="placeholder-black hover:cursor-pointer focus:cursor-auto hover:border-primary focus:outline-primary font-medium border-black border-2 rounded-[5px] w-full pt-[7px] pb-1.5 px-2.5"
          :type="show ? 'text' : 'password'">
      <transition>
        <label
            v-if="passwordFocused || password"
            :class="!passwordFocused && password ? 'text-black' : ''"
            class="text-primary absolute -top-1.5 left-3 px-1 text-[10px] font-bold bg-white">პაროლი</label>
      </transition>
    </div>
    <router-link class="flex w-full justify-end font-medium  text-primary text-xs mb-5"
                 to="/auth/recover-password-step-one">
      დაგავიწყდა?
    </router-link>
    <button class="bg-primary font-medium text-white py-[6.5px] rounded w-full hover:shadow-2xl mb-[15px]">შესვლა
    </button>
    <h3 class="flex justify-center mb-[15px]"> ან</h3>
    <router-link to="/auth/registration-step-one"
                 class="font-medium flex justify-center text-primary  py-[6.5px] rounded-[5px] hover:shadow-2xl hover:text-white hover:bg-primary w-full">
      რეგისტრაცია
    </router-link>
  </form>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 10;
  top: 10px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  padding: 0;
}
</style>
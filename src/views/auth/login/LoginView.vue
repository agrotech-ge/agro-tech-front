<template>
  <form @submit.prevent="" class="flex flex-col justify-center items-center w-[550px]">
    <h1 class="text-primary text-2xl mb-[70px] font-bold uppercase">ავტორიზაცია</h1>
    <div class="relative mb-[50px] w-full">
      <input
          @focusin="emailFocused = true"
          @focusout="emailFocused = false"
          v-model="email"
          :placeholder="!emailFocused ? 'ელ. ფოსტა' : ''"
          class="w-full hover:cursor-pointer focus:cursor-auto placeholder-black font-medium hover:border-primary focus:outline-primary border-black border-2 rounded-[5px] p-[15px]"
          type="text"/>
      <transition>
        <label
            v-if="emailFocused || email"
            :class="!emailFocused && email ? '!text-black' : ''"
            class="text-primary absolute -top-2 left-2.5 px-[5px] text-[10px] font-bold bg-white">ელ. ფოსტა</label>
      </transition>
    </div>
    <div class="relative mb-[25px] w-full">
      <img @click="togglePassword" class="absolute top-[15px] right-[15px] hover:cursor-pointer"
           :src="show ? '/src/assets/icons/auth/hide-password-icon.svg' : '/src/assets/icons/auth/show-password-icon.svg'"
           alt="show-hide password icon">
      <input
          @focusin="passwordFocused = true"
          @focusout="passwordFocused = false"
          v-model="password"
          :placeholder="!password ? 'პაროლი' : ''"
          class="w-full hover:cursor-pointer focus:cursor-auto placeholder-black font-medium hover:border-primary focus:outline-primary border-black border-2 rounded-[5px] p-[15px]"
          :type="show ? 'text' : 'password'"/>
      <transition>
        <label
            v-if="passwordFocused || password"
            :class="!passwordFocused && password ? '!text-black' : ''"
            class="text-primary absolute -top-2 left-2.5 px-[5px] text-[10px] font-bold bg-white">პაროლი</label>
      </transition>
    </div>
    <div class="flex justify-between items-center mb-[70px] w-full">
      <div class="flex items-center gap-x-[7px]">
        <img
            class="cursor-pointer"
            @click="checked = !checked"
            :src="checked ? '/src/assets/icons/auth/remember-checked.svg' : '/src/assets/icons/auth/remember-unchecked.svg'"
            alt="check-uncheck remember">
        <label class="text-sm">დამახსოვრება</label>
      </div>
      <router-link class="font-semibold text-primary text-xs"
                   to="/auth/recover-password-step-one">
        დაგავიწყდა?
      </router-link>
    </div>
    <button class="bg-primary font-medium text-white py-[15px] rounded-[5px] w-full hover:shadow-2xl mb-[25px]">შესვლა
    </button>
    <h3 class="flex justify-center mb-[25px] font-medium uppercase">ან</h3>
    <router-link to="/auth/registration-step-one"
                 class="font-medium border border-primary flex justify-center text-primary  py-[15px] rounded-[5px] hover:shadow-2xl hover:text-white hover:bg-primary w-full">
      რეგისტრაცია
    </router-link>
  </form>
</template>

<script setup>
import {ref} from "vue";

const show = ref(false);
const checked = ref(false)
const email = ref('');
const password = ref('');

const togglePassword = () => {
  show.value = !show.value;
};

const emailFocused = ref(false);
const passwordFocused = ref(false);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  top: 16px;
  left: 16px;
  font-size: 16px;
  font-weight: 500;
  color: black;
  background-color: transparent;
  padding: 0;
}
</style>

<template>
  <form @submit.prevent="handleRegister" class="flex flex-col items-center justify-center w-[550px]">
    <h1 class="text-2xl font-bold uppercase text-primary">რეგისტრაცია</h1>
    <div class="flex w-full flex-col gap-y-[40px] my-[70px]">
      <AnimatedInputComponent placeholder="პაროლი" v-model="password" show-password-toggle/>
      <AnimatedInputComponent placeholder="გაიმეორეთ პაროლი" v-model="repeatPassword" show-password-toggle/>
    </div>
    <button class="w-full font-medium text-white bg-primary py-[15px] rounded-[5px] mb-[25px] hover:shadow-xl">
      რეგისტრაცია
    </button>
  </form>
</template>

<script setup>
import AnimatedInputComponent from "../../../components/views/auth/AnimatedInputComponent.vue";
import useRegister from "../../../composables/useRegister";


const {
  password,
  repeatPassword,
  handleRegister
} = useRegister()
</script>

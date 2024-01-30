<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col items-center justify-center w-[550px]">
    <h1 class="text-2xl font-bold uppercase text-primary">რეგისტრაცია</h1>
    <div class="flex w-full flex-col gap-y-[40px] my-[70px]">
      <AnimatedInputComponent placeholder="პაროლი" v-model="newPassword" show-password-toggle/>
      <AnimatedInputComponent placeholder="გაიმეორეთ პაროლი" v-model="repeatedPassword" show-password-toggle/>
    </div>
    <button class="w-full font-medium text-white bg-primary py-[15px] rounded-[5px] mb-[25px] hover:shadow-xl">
      რეგისტრაცია
    </button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import AnimatedInputComponent from "../../../components/views/auth/AnimatedInputComponent.vue";

const router = useRouter();
const newPassword = ref('');
const repeatedPassword = ref('');
const handleSubmit = async () => {
  try {
    await router.push('/auth/login');
  } catch (error) {
    console.error(error);
  }
};
</script>

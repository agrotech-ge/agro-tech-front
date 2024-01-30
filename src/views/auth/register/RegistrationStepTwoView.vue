<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center w-[550px]">
    <h1 class="text-primary text-2xl font-bold uppercase">რეგისტრაცია</h1>
    <div class="flex flex-col gap-y-[40px] my-[70px] w-full">
      <AnimatedPasswordInputComponent placeholder="პაროლი" v-model="newPassword"/>
      <AnimatedPasswordInputComponent placeholder="გაიმეორეთ პაროლი" v-model="repeatedPassword"/>
    </div>
    <button class="bg-primary font-medium text-white py-[15px] rounded-[5px] w-full hover:shadow-xl mb-[25px]">
      რეგისტრაცია
    </button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import AnimatedPasswordInputComponent from "../../../components/views/auth/AnimatedPasswordInputComponent.vue";

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

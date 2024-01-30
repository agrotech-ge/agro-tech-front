<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center w-[550px]">
    <h1 class="text-primary text-2xl font-bold uppercase">რეგისტრაცია</h1>
    <div class="flex flex-col gap-y-[40px] w-full my-[70px]">
      <AnimatedInputComponent :placeholder="'ელ. ფოსტა'" v-model="email"/>
      <div class="flex gap-x-2.5">
        <AnimatedInputComponent :placeholder="'პინკოდი'" v-model="pinCode"/>
        <button class="w-1/3 bg-primary font-medium text-white py-[15px] px-[22.5px] rounded-[5px] hover:shadow-xl">
          გაგზავნა
        </button>
      </div>
    </div>
    <button class="bg-primary font-medium text-white py-[15px] rounded-[5px] w-full hover:shadow-xl mb-[25px]">
      შემდეგი
    </button>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import AnimatedInputComponent from "../../../components/views/auth/AnimatedInputComponent.vue";

const router = useRouter();

const email = ref('')
const pinCode = ref('')

const handleSubmit = async () => {
  try {
    await router.push('/auth/recover-password-step-two');
  } catch (error) {
    console.error(error);
  }
};
</script>
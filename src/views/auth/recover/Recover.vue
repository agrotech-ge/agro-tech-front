<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col items-center justify-center w-[550px]">
    <h1 class="text-2xl font-bold uppercase text-primary">რეგისტრაცია</h1>
    <div class="flex w-full flex-col gap-y-[40px] my-[70px]">
      <AnimatedInputComponent :placeholder="'ელ. ფოსტა'" v-model="email"/>
      <div class="flex gap-x-2.5">
        <AnimatedInputComponent :placeholder="'პინკოდი'" v-model="pinCode"/>
        <button class="w-1/3 font-medium text-white bg-primary py-[15px] px-[22.5px] rounded-[5px] hover:shadow-xl">
          გაგზავნა
        </button>
      </div>
    </div>
    <button class="w-full font-medium text-white bg-primary py-[15px] rounded-[5px] mb-[25px] hover:shadow-xl">
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
    await router.push('/auth/recover-step-two');
  } catch (error) {
    console.error(error);
  }
};
</script>
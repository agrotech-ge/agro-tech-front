<template>
  <form @submit.prevent="register" class="flex flex-col items-center justify-center w-1/3">
    <h1 class="text-2xl font-bold uppercase text-primary">რეგისტრაცია</h1>

    <div class="grid grid-cols-2 gap-x-5 gap-y-10 my-16">
      <AnimatedInputComponent :class="{'col-span-2': index === 4}" v-for="(field, index) in fields" :key="index" :placeholder="field.placeholder"
                              v-model="data[field.model]" :show-password-toggle="field.isPassword"/>
    </div>

    <button
        type="submit"
        class="w-full font-medium text-white bg-primary py-[15px] rounded-[5px] mb-[25px] hover:shadow-xl">
      შემდეგი
    </button>
  </form>
</template>

<script setup>
import AnimatedInputComponent from "../../components/auth/AnimatedInput.vue";
import useRegister from "../../composables/useRegister.js";

const {
  fields,
  data,
  register
} = useRegister();
</script>

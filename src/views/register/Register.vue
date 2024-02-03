<template>
  <form @submit.prevent="validateFormData" class="flex flex-col items-center justify-center w-[550px]">
    <h1 class="text-2xl font-bold uppercase text-primary">რეგისტრაცია</h1>
    <div class="flex w-full flex-col gap-y-[40px] my-[70px]">
      <template v-for="(field, index) in formFields" :key="index">
        <AnimatedInputComponent :placeholder="field.placeholder" v-model="formData[field.model]"/>
      </template>
      <div class="flex gap-x-2.5">
        <template v-for="(field, index) in additionalFields" :key="index">
          <AnimatedInputComponent :placeholder="field.placeholder" v-model="formData[field.model]"/>
        </template>
        <button type="button"
                class="w-1/3 font-medium text-white bg-primary py-[15px] px-[22.5px] rounded-[5px] hover:shadow-xl">
          გაგზავნა
        </button>
      </div>
    </div>
    <button type="submit"
            class="w-full font-medium text-white bg-primary py-[15px] rounded-[5px] mb-[25px] hover:shadow-xl">
      შემდეგი
    </button>
  </form>
</template>

<script setup>
import AnimatedInputComponent from "../../components/auth/AnimatedInput.vue";
import useRegister from "../../composables/useRegister.js";

const {
  formFields,
  additionalFields,
  formData,
  validateFormData
} = useRegister();
</script>

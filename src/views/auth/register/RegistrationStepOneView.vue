<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center w-[550px]">
    <h1 class="text-primary text-2xl font-bold uppercase">რეგისტრაცია</h1>
    <div class="flex flex-col gap-y-[40px] w-full my-[70px]">
      <template v-for="(field, index) in formFields" :key="index">
        <AnimatedInputComponent :placeholder="field.placeholder" v-model="formData[field.model]"/>
      </template>
      <div class="flex gap-x-2.5">
        <template v-for="(field, index) in additionalFields" :key="index">
          <AnimatedInputComponent :placeholder="field.placeholder" v-model="formData[field.model]"/>
        </template>
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

const formFields = [
  {placeholder: "სახელი", model: "firstName"},
  {placeholder: "გვარი", model: "lastName"},
  {placeholder: "ქალაქი", model: "city"},
  {placeholder: "უბანი", model: "distinct"},
  {placeholder: "ელ. ფოსტა", model: "email"}
];

const additionalFields = [
  {placeholder: "პინკოდი", model: "pinCode"}
];

const formData = ref({
  firstName: '',
  lastName: '',
  city: '',
  distinct: '',
  email: '',
  pinCode: ''
});

const handleSubmit = async () => {
  try {
    console.log(formData)
    await router.push('/auth/registration-step-two');
  } catch (error) {
    console.error(error);
  }
};
</script>

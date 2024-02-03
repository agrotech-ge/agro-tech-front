<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col items-center justify-center w-[550px]">
    <h1 class="text-2xl font-bold uppercase text-primary mb-[70px]">ავტორიზაცია</h1>
    <AnimatedInputComponent placeholder="ელ. ფოსტა" v-model="email" class="w-full mb-[40px]"/>
    <AnimatedInputComponent placeholder="პაროლი" v-model="password" class="w-full mb-[25px]" showPasswordToggle/>
    <div class="flex w-full items-center justify-between mb-[70px]">
      <div class="flex items-center gap-x-[7px]">
        <img
            class="cursor-pointer"
            @click="checked = !checked"
            :src="checked ? '/src/assets/icons/auth/remember-checked.svg' : '/src/assets/icons/auth/remember-unchecked.svg'"
            alt="check-uncheck remember">
        <label class="text-sm">დამახსოვრება</label>
      </div>
      <router-link class="text-xs font-semibold text-primary"
                   to="/auth/recover-password-step-one">
        დაგავიწყდა?
      </router-link>
    </div>
    <button class="w-full font-medium text-white bg-primary py-[15px] rounded-[5px] mb-[25px] hover:shadow-xl">შესვლა
    </button>
    <h3 class="flex justify-center font-medium uppercase mb-[25px]">ან</h3>
    <router-link to="/auth/registration-step-one"
                 class="flex w-full justify-center border font-medium border-primary text-primary py-[15px] rounded-[5px] hover:bg-primary hover:text-white hover:shadow-xl">
      რეგისტრაცია
    </router-link>
  </form>
</template>

<script setup>
import AnimatedInputComponent from "../../../components/views/auth/AnimatedInputComponent.vue";
import useLogin from "../../../composables/useLogin";

const {
  checked,
  email,
  password,
  handleSubmit,
} = useLogin()
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col justify-center items-center w-[550px]">
    <h1 class="text-primary text-2xl mb-[70px] font-bold uppercase">ავტორიზაცია</h1>
    <AnimatedInputComponent placeholder="ელ. ფოსტა" v-model="email" class="mb-[40px] w-full"/>
    <AnimatedPasswordInputComponent placeholder="პაროლი" v-model="password" class="mb-[25px] w-full"/>
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
    <button class="bg-primary font-medium text-white py-[15px] rounded-[5px] w-full hover:shadow-xl mb-[25px]">შესვლა
    </button>
    <h3 class="flex justify-center mb-[25px] font-medium uppercase">ან</h3>
    <router-link to="/auth/registration-step-one"
                 class="font-medium border border-primary flex justify-center text-primary  py-[15px] rounded-[5px] hover:shadow-xl hover:text-white hover:bg-primary w-full">
      რეგისტრაცია
    </router-link>
  </form>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import AnimatedInputComponent from "../../../components/views/auth/AnimatedInputComponent.vue";
import AnimatedPasswordInputComponent from "../../../components/views/auth/AnimatedPasswordInputComponent.vue";

const router = useRouter();

const checked = ref(false);
const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  try {
    await router.push('/');
  } catch (error) {
    console.error(error);
  }
};
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

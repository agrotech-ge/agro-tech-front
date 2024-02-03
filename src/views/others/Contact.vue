<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen"
  >
    <h1>Contact Form</h1>
    <form
      class=""
      accept-charset="UTF-8"
      v-on:submit.prevent="onSubmit()"
      method="POST"
    >
      <div class="form-fields">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required @change="handleNameChange">
      </div>

      <div class="form-fields">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required @change="handleEmailChange">
      </div>

      <div class="form-fields">
        <label for="message">Message</label>
        <textarea id="message" name="message" required @change="handleMessageChange"></textarea>
      </div>

      <VueReCaptcha
        :siteKey="siteKey"
        @verify="handleSuccess"
        @error="handleError"
      ></VueReCaptcha>

      <button type="submit">Send message</button>
    </form>
    <div v-if="isSuccess">
      Success
    </div>
  </div>
</template>

<script setup>

import { computed, ref } from 'vue';
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3';

const message = ref("");
const loading = ref(true);
const name = ref("");
const email = ref("");
const isSuccess = ref(false);
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

const handleNameChange = (e) => {
  name.value = e.target.value;
}
const handleEmailChange = (e) => {
  email.value = e.target.value;
}

const handleMessageChange = (e) => {
  message.value = e.target.value;
}

const siteKey = computed(() => {
  return import.meta.env.VITE_RECAPTCHA_SITEKEY;
});

const handleSuccess = () => {
  // TODO: on success it should send email
  console.log("success");
}

const handleError = () => {
  isSuccess.value = false;
  // TODO: better error handling
}

const onSubmit = async () => {
  await recaptchaLoaded();
  console.log("loaded");
  const recaptchaToken = await executeRecaptcha('login');
  // TODO: store recaptchaToken somewhere?
};
</script>

<style scoped>
  h1 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .form-fields {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 0.9rem;
  }
  input[type="text"], input[type="email"], textarea {
    border: 1px solid #ccc;
    font-size: 1rem;
    padding: 6px 10px;
    border-radius: 4px;
  }
  button[type="submit"] {
    background-color: rgb(67 56 202);
    color: white;
    font-size: 0.8rem;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    font-weight: 500;
  }
</style>
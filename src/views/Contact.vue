<script setup>
import AnimatedInput from "/src/components/auth/AnimatedInput.vue"
import useContact from "/src/composables/useContact.js"

const {data} = useContact()
</script>

<template>
  <div class="flex items-center justify-center pt-16 pb-32">
    <form @submit.prevent="console.log(data)"
          class="w-1/4 border border-[#D9D9D9] rounded-md p-16 flex flex-col gap-y-12">
      <div class="grid grid-cols-2 gap-x-4">
        <animated-input placeholder="სახელი" v-model="data.name"/>

        <animated-input placeholder="ტელეფონი" v-model="data.phone"/>
      </div>

      <animated-input placeholder="ემაილი" v-model="data.email"/>

      <animated-input placeholder="შეტყობინება" v-model="data.message" is-textarea height="175px"/>

      <button class="w-full font-medium text-white bg-primary py-[15px] rounded-[5px] mb-[25px] hover:shadow-xl">
        გაგზავნა
      </button>
    </form>
  </div>
</template>
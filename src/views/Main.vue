<script setup>
import {ref} from "vue";

const tractors = ref([
  {
    photo: '/src/assets/images/tractors/tractor1.svg',
    publishDate: '2024-02-03 08:30',
    title: 'ქირავდება ტრაქტორი Kubota MU4501, არის იდეალურ მდ...',
    price: '10,000 ₾'
  },
  {
    photo: '/src/assets/images/tractors/tractor2.svg',
    publishDate: '2024-02-03 09:45',
    title: 'იყიდება ტრაქტორი Powertrac Euro...',
    price: '12,000 ₾'
  },
  {
    photo: '/src/assets/images/tractors/tractor3.svg',
    publishDate: '2024-02-03 11:00',
    title: 'ქირავდება',
    price: '15,000 ₾'
  },
  {
    photo: '/src/assets/images/tractors/tractor4.svg',
    publishDate: '2024-02-03 13:15',
    title: 'იყიდება',
    price: '20,000 ₾'
  },
  {
    photo: '/src/assets/images/tractors/tractor5.svg',
    publishDate: '2024-02-03 14:30',
    title: 'იყიდება John Deere 3028EN, საუკეთესო მდგომარებაში...',
    price: '25,000 ₾'
  },
  {
    photo: '/src/assets/images/tractors/tractor6.svg',
    publishDate: '2024-02-03 16:45',
    title: 'ქირავდება John Deere 3028EN, საუკეთ...',
    price: '30,000 ₾'
  },
  {
    photo: '/src/assets/images/tractors/tractor7.svg',
    publishDate: '2024-02-03 18:00',
    title: 'იყიდება',
    price: '35,000 ₾'
  },
  {
    photo: '/src/assets/images/tractors/tractor8.svg',
    publishDate: '2024-02-03 19:15',
    title: 'ქირავდება, სასწრაფოდ',
    price: '40,000 ₾'
  }
]);


const members = ref([
  {
    photo: '/src/assets/images/members/member1.svg',
    name: 'ნიკოლოზ კაციტაძე',
    desc: 'ჯგუფის ლიდერი, მენტორი, იდეის ავტორი'
  },
  {
    photo: '/src/assets/images/members/member2.svg',
    name: 'ლაშა გაგნიძე',
    desc: 'front-end დეველოპერი, back-end დეველოპერი'
  },
  {
    photo: '/src/assets/images/members/member3.svg',
    name: 'კარლო ცუცქირიძე',
    desc: 'front-end დეველოპერი, back-end დეველოპერი'
  },
  {
    photo: '/src/assets/images/members/member4.svg',
    name: 'სანდრო ღუღუნიშვილი',
    desc: 'back-end დეველოპერი'
  },
  {
    photo: '/src/assets/images/members/member5.svg',
    name: 'ვახო ბარათაშვილი',
    desc: 'back-end დეველოპერი, UI/UX დიზაინერი'
  },
  {
    photo: '/src/assets/images/members/member6.svg',
    name: 'ანდრია ბიბიაშვილი',
    desc: 'back-end დეველოპერი'
  }
]);

</script>

<template>
  <img src="@/assets/images/main-bg.svg" class="w-full aspect-auto" alt="main bg">
  <div class="top-40 left-20 absolute font-medium text-white">
    <p class="px-8 py-3 bg-black bg-opacity-70 text-[64px] w-fit">აგროტექი</p>
    <p class="px-8 py-3 my-10 bg-black bg-opacity-70 text-[40px]">ტრაქტორების
      გაყიდვისა და გაქირავების სერვისი</p>
  </div>
  <div class="flex flex-col gap-y-36 px-14 pt-12 pb-24">
    <div class="flex flex-col gap-y-12">
      <p class="border-b-2 border-b-secondary pb-10 text-[64px] text-secondary">განცხადებები</p>
      <div class="grid grid-cols-2 gap-x-16 gap-y-14">
        <div class="flex gap-x-7 border border-[#D9D9D9] rounded p-1" v-for="(tractor, index) in tractors" :key="index">
          <img :src="tractor.photo" alt="tractor image">
          <div class="flex flex-col justify-between w-full">
            <p class="text-[#5C5C5C] font-medium text-[12px]" v-text="tractor.publishDate"/>
            <p class="font-semibold" v-text="tractor.title"/>
            <div class="flex justify-between text-primary">
              <p class="font-bold" v-text="tractor.price"/>
              <p class="font-medium">ნახვა</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-x-10">
      <div class="flex flex-col gap-y-3.5" v-for="(member, index) in members"
           :key="index">
        <img class="rounded" :src="member.photo" alt="member image"/>
        <p class="font-medium" v-text="member.name"/>
        <p class="font-medium text-[12px]" v-text="member.desc"/>
      </div>
    </div>
  </div>
</template>
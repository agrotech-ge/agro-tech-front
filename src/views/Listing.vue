<script setup>
import {onMounted, ref} from "vue"
import useMain from "../composables/useMain"
import {useRoute} from "vue-router"

const {getTractorById} = useMain()
const route = useRoute()
const tractor = ref({})

onMounted(() => {
  tractor.value = getTractorById(Number(route.params.id))
})
</script>

<template>
  <section class="flex flex-col gap-y-32 px-16 pt-16 pb-24">
    {{ tractor }}
  </section>
</template>
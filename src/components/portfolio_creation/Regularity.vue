<script setup lang="ts">
defineProps({
  regularity: String
})

const emits = defineEmits(['use_regularity'])
</script>

<template>
  <div class="h-full w-full items-center flex p-14 gap-x-2">
    <div @click="emits('use_regularity', 'weekly')" :class="regularity === 'weekly' ? 'h-full bg-tatra_blue text-main_color font-bold' : 'h-2/3'" class="hover:bg-tatra_blue hover:text-main_color cursor-pointer flex justify-center items-center text-tatra_blue border-2 border-tatra_blue flex-1 bg-gradient-to-br from-transparent to-gray-900">
      Týždenne
    </div>
    <div @click="emits('use_regularity', 'monthly')" :class="regularity === 'monthly' ? 'h-full bg-tatra_blue text-main_color font-bold' : 'h-2/3'" class="hover:bg-tatra_blue hover:text-main_color cursor-pointer flex justify-center items-center text-tatra_blue border-2 border-tatra_blue flex-1 bg-gradient-to-br from-transparent to-gray-900">
      Mesačne
    </div>
    <div @click="emits('use_regularity', 'custom')" :class="regularity === 'custom' ? 'h-full bg-tatra_blue text-main_color font-bold' : 'h-2/3'" class="hover:bg-tatra_blue hover:text-main_color cursor-pointer flex justify-center items-center text-tatra_blue border-2 border-tatra_blue flex-1 bg-gradient-to-br from-transparent to-gray-900">
      Vlastné
    </div>
  </div>
</template>
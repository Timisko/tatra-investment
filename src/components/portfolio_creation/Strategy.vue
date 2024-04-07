<script setup lang="ts">
  defineProps({
    strategy: String
  })

  const emits = defineEmits(['use_strategy'])
</script>

<template>
  <div class="h-full w-full items-center flex p-14 gap-x-2">
    <div @click="emits('use_strategy', 'dynamic')" :class="strategy === 'dynamic' ? 'h-full bg-tatra_blue text-main_color font-bold' : 'h-2/3'" class="hover:bg-tatra_blue hover:text-main_color cursor-pointer flex justify-center items-center text-tatra_blue border-2 border-tatra_blue flex-1 bg-gradient-to-br from-transparent to-gray-900">
      Dynamické
    </div>
    <div @click="emits('use_strategy', 'balanced')" :class="strategy === 'balanced' ? 'h-full bg-tatra_blue text-main_color font-bold' : 'h-2/3'" class="hover:bg-tatra_blue hover:text-main_color cursor-pointer flex justify-center items-center text-tatra_blue border-2 border-tatra_blue flex-1 bg-gradient-to-br from-transparent to-gray-900">
      Vyvážené
    </div>
    <div @click="emits('use_strategy', 'conservative')" :class="strategy === 'conservative' ? 'h-full bg-tatra_blue text-main_color font-bold' : 'h-2/3'" class="hover:bg-tatra_blue hover:text-main_color cursor-pointer flex justify-center items-center text-tatra_blue border-2 border-tatra_blue flex-1 bg-gradient-to-br from-transparent to-gray-900">
      Konzervatívne
    </div>
  </div>
</template>
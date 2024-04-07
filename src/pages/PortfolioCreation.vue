<script setup lang="ts">
import Risk from "@/components/portfolio_creation/Risk.vue";
import { ref } from "vue";

const index = ref(1);
const strategy = ref()

function useStrategy(val: string) {
  index.value = 2;
  strategy.value = val
}
</script>

<template>
  <div class="w-full h-svh">
    <div class="w-full" style="height: 98%">
      <Risk v-if="index == 1" @use_strategy="useStrategy" :strategy="strategy"></Risk>
      <
    </div>

    <div class="w-full">
      <div :style="`width: ${20 * index}%`" class="bg-tatra_blue h-4"></div>
    </div>
  </div>
</template>
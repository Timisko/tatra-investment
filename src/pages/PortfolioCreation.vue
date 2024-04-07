<script setup lang="ts">
import Risk from "@/components/portfolio_creation/Risk.vue";
import { reactive, ref } from "vue";
import Regularity from "@/components/portfolio_creation/Regularity.vue";

const index = ref(1);
const form = reactive({
  strategy: '',
  regularity: ''
})

function useStrategy(val: string) {
  index.value = 2;
  form.strategy = val
}
function useRegularity(val: string) {
  index.value = 3;
  form.regularity = val
}

function goBack(val?: number) {
  if (val) {
    index.value = val
    return
  }

  index.value--;
  switch (index.value) {
    case 1:
      form.regularity = ''
  }
}

</script>

<template>
  <div class="w-full h-svh relative">
    <div class="absolute m-4 cursor-pointer" v-if="index > 1" @click="goBack">
      <i class="fa fa-arrow-left text-tatra_blue text-2xl"></i>
    </div>

    <div class="flex px-14 pt-20">
      <div v-if="index == 1" class="text-2xl text-tatra_blue">Stratégia</div>
      <div v-if="index == 2" class="text-2xl text-tatra_blue">Pravidelnosť</div>
    </div>

    <div class="w-full" style="height: 85%">
      <Risk v-if="index == 1" @use_strategy="useStrategy" :strategy="form.strategy"></Risk>
      <Regularity v-if="index == 2" @use_regularity="useRegularity" :regularity="form.regularity"></Regularity>
    </div>

    <div class="w-full flex gap-x-1">
      <div class="h-2 flex-1" @click="goBack(i)" :class="index >= i ? 'bg-tatra_blue cursor-pointer' : 'bg-tatra_dark pointer-events-none'" v-for="i of 5">
      </div>
    </div>
  </div>
</template>
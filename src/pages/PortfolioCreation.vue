<script setup lang="ts">
import Risk from "@/components/portfolio_creation/Strategy.vue";
import { reactive, ref } from "vue";
import Regularity from "@/components/portfolio_creation/Regularity.vue";
import router from "@/router";
import Cost from "@/components/portfolio_creation/Investment.vue";
import Options from "@/components/portfolio_creation/Options.vue";

const index = ref(1);
const form = reactive({
  strategy: '',
  regularity: '',
  first_investment: 0,
  regular_investment: 0,
  options: [],
  private: 0
})

function useStrategy(val: string) {
  index.value = 2;
  form.strategy = val
}

function useRegularity(val: string) {
  index.value = 3;
  form.regularity = val
}

function useInvestment(val1: number, val2: number) {
  index.value = 4
  form.first_investment = val1
  form.regular_investment = val2
}

function skipInvestment() {
  index.value = 4
  form.first_investment = 0
  form.regular_investment = 0
}

function setOptions(val: []) {
  index.value = 5
  form.options = val
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
      break;
    case 2:
      form.first_investment = 0
      form.regular_investment = 0
      break;
    case 3:
      form.regularity = ''
      break;
    case 4:
      form.regularity = ''
      break;
  }
}

function leavePage() {
  router.push('/home')
}

</script>

<template>
  <div class="w-full h-svh relative animate__animated animate__fadeIn">
    <div class="absolute m-4 cursor-pointer" v-if="index > 1" @click="goBack()">
      <i class="fa fa-arrow-left text-tatra_blue text-2xl"></i>
    </div>
    <div class="absolute m-4 cursor-pointer" v-if="index == 1" @click="leavePage()">
      <i class="fa fa-times text-tatra_blue text-2xl"></i>
    </div>

    <div class="flex px-14 pt-20">
      <div v-if="index == 1" class="text-2xl text-tatra_blue">Stratégia</div>
      <div v-if="index == 2" class="text-2xl text-tatra_blue">Pravidelnosť</div>
      <div v-if="index == 3" class="text-2xl text-tatra_blue">Suma</div>
      <div v-if="index == 4" class="text-2xl text-tatra_blue">Možnosti</div>
    </div>

    <div class="w-full" style="height: 85%">
      <Risk class="animate__animated animate__fadeIn" v-if="index == 1" @use_strategy="useStrategy" :strategy="form.strategy"></Risk>
      <Regularity class="animate__animated animate__fadeIn" v-if="index == 2" @use_regularity="useRegularity" :regularity="form.regularity"></Regularity>
      <Cost class="animate__animated animate__fadeIn" v-if="index == 3" @set_investment="useInvestment" @go_next="skipInvestment" :first_investment="form.first_investment" :regular_investment="form.regular_investment"></Cost>
      <Options class="animate__animated animate__fadeIn" v-if="index == 4" @set_options="setOptions" :options="form.options"></Options>

      <div class="text-tatra_blue text-center space-y-4" v-if="index == 5">
        <div class="text-2xl">Stačí už len posledný krok.</div>
        <div class="text-lg">Prajete si aby bolo vaše portfólio dostupné pre iných používateľov aplikácie</div>
        <div class="flex justify-center gap-x-2">
          <div @click="form.private = 1" :class="form.private == 1 ? 'bg-tatra_blue text-main_color' : ''" class="border cursor-pointer hover:bg-tatra_blue hover:text-main_color border-tatra_blue text-tatra_blue bg-main_color p-4">Áno</div>
          <div @click="form.private = 2" :class="form.private == 2 ? 'bg-tatra_blue text-main_color' : ''" class="border cursor-pointer hover:bg-tatra_blue hover:text-main_color border-tatra_blue text-tatra_blue bg-main_color p-4">Nie</div>
        </div>
        <div class="text-sm">
          <i class="fa fa-warning"> Žiadne z Vašich osobných údajov a ani konkrétne zárobky nebudú zverejnené</i>
        </div>

        <div v-if="form.private != 0" class="flex justify-center">
          <div class="border cursor-pointer hover:bg-tatra_blue hover:text-main_color border-tatra_blue text-tatra_blue bg-main_color p-4">
            Uložiť
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex gap-x-1">
      <div class="h-2 flex-1" @click="goBack(i)"
           :class="index >= i ? 'bg-tatra_blue cursor-pointer' : 'bg-tatra_dark pointer-events-none'" v-for="i of 5">
      </div>
    </div>
  </div>
</template>
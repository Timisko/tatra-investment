<script setup lang="ts">
defineProps({
  first_investment: Number,
  regular_investment: Number
})

const emits = defineEmits(['set_investment', 'go_next'])
</script>

<template>
  <form @submit.prevent="emits('set_investment', first_investment, regular_investment)" class="h-full space-y-4 w-full items-center p-14 gap-x-2">
    <div>
      <p class="text-tatra_blue text-xl py-1">Počiatočná investícia:</p>
      <input required class="p-2 bg-main_color outline-none w-2/5 text-tatra_blue">
      <p class="text-tatra_blue text-sm pt-2">
        <i class="fa fa-warning"></i>
        Vždy investujte len toľko čo si môžete dovoliť stratiť
      </p>
    </div>

    <div>
      <p class="text-tatra_blue text-xl py-1">Pravidelná investícia</p>
      <input required class="p-2 bg-main_color outline-none w-2/5 text-tatra_blue">
      <p class="text-tatra_blue text-sm pt-2">
        <i class="fa fa-bullhorn"></i>
        Pravidelnosť prevyšuje kvantitu
      </p>
    </div>

    <div class="space-y-2">
      <button type="submit" class="bg-main_color text-tatra_blue border-tatra_blue border p-2 rounded-md hover:bg-tatra_blue hover:text-main_color">Pokračovať</button>
      <p @click="emits('go_next')" class="text-tatra_blue text-xs cursor-pointer">Vyplniť neskôr</p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  options: []
})

const emits = defineEmits(['set_options'])
const list = ref(new Map<number, number>())

if (props.options) {
  for (const o of props.options)
    list.value.set(o, o)
}


function get_icon(i: number) {
  switch (i) {
    case 1:
      return 'fa fa-building-o text-4xl'
    case 2:
      return 'fa fa-file-text-o text-4xl'
    case 3:
      return 'fa fa-archive text-4xl'
    case 4:
      return 'fa fa-toggle-up text-4xl'
    case 5:
      return 'fa fa-line-chart text-4xl'
  }
}

function get_text(i: number) {
  switch (i) {
    case 1:
      return 'Reality'
    case 2:
      return 'Akcie'
    case 3:
      return 'Dlhopisy'
    case 4:
      return 'ETF'
    case 5:
      return 'Podielové fondy'
  }
}

function add_option(i: number) {
  if (list.value.has(i))
    list.value.delete(i)
  else
    list.value.set(i, i)
}

</script>

<template>
  <div class="h-full space-y-4 w-full items-center p-14 gap-x-2">
    <div class="flex-1 justify-center items-center flex gap-x-2">
      <div v-for="i of 5" @click="add_option(i)" :class="list.has(i) ? 'bg-tatra_blue text-main_color' : ''" class="hover:bg-tatra_blue bg-main_color hover:text-main_color cursor-pointer h-48 w-48 border-tatra_blue border flex justify-center items-center text-tatra_blue">
        <div class="text-center">
          <i :class="get_icon(i)"></i>
          <p>{{get_text(i)}}</p>
        </div>
      </div>
    </div>

    <div class="w-full h-px bg-tatra_blue"></div>

    <div v-if="list.size < 1" @click="emits('set_options', [2, 4, 5])" class="text-tatra_blue flex justify-center text-xl cursor-pointer">
      Odporúčiť výber investícií
    </div>
    <div v-else class="flex justify-center">
      <div @click="emits('set_options', Array.from(list.values()))" class="text-tatra_blue flex justify-center text-xl cursor-pointer border p-2 border-tatra_blue bg-main_color hover:bg-tatra_blue hover:text-main_color">
        Pokračovať
      </div>
    </div>
  </div>
</template>
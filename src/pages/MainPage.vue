<script setup lang="ts">

import ChatBot from "@/components/ChatBot.vue";
import NavBar from "@/components/NavBar.vue";
import InvestmentCard from "@/components/InvestmentCard.vue";
import router from "@/router";
import { Api } from "@/util/serverCommunication";
import { ref } from "vue";

const items = ref([])

Api.get('all_portfolios')
    .then(v => items.value = v.data)

</script>

<template>
  <div class="bg-main_color w-full h-screen">
    <NavBar />

    <div class="animate__animated animate__bounceInUp px-40 py-10">
      <div class="space-y-3">
        <div v-for="item in items">
          <InvestmentCard />
        </div>
      </div>
      <div class="flex my-3">
        <div class="flex-1 flex items-center">
          <div class="w-full h-0.5 bg-card_color rounded"></div>
        </div>
        <div class="mx-4">
          <button @click="router.push('/create/portfolio')" class="bg-tatra_blue px-6 py-2 text-white rounded">Nová investícia</button>
        </div>
        <div class="flex-1 flex items-center">
          <div class="w-full h-0.5 bg-card_color rounded"></div>
        </div>
      </div>
    </div>
  </div>
  <ChatBot class="absolute right-0 bottom-0 m-4"></ChatBot>
</template>

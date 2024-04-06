<script setup lang="ts">

import ChatBot from "@/components/ChatBot.vue";
import NavBar from "@/components/NavBar.vue";

</script>

<template>
  <div class="bg-main_color w-full h-screen">
    <NavBar/>
  </div>
  <ChatBot class="absolute right-0 bottom-0 m-4"></ChatBot>
</template>

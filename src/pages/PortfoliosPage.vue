<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
import UsersPortfolioCard from "@/components/UsersPortfolioCard.vue";

</script>

<template>
    <div class="bg-main_color w-full h-screen">
        <NavBar></NavBar>

        <div class="px-40">
            <div class="animate__animated animate__fadeInUpBig px-20 pt-7 grid grid-cols-3 grid-rows-2 gap-10">
                <div v-for="item in 6">
                    <UsersPortfolioCard />
                </div>
            </div>
        </div>
    </div>
</template>

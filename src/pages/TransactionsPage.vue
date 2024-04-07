<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
import TransactionCard from "@/components/TransactionCard.vue";

</script>

<template>
    <div class="bg-main_color w-full h-screen">
        <NavBar></NavBar>

        <div class="animate__animated animate__fadeInUpBig px-40 text-white py-7 space-y-2">
            <div>Zoznam transakcií</div>

            <div class="space-y-1">
                <div v-for="item in 4">
                    <TransactionCard />
                </div>
            </div>
        </div>
    </div>
</template>
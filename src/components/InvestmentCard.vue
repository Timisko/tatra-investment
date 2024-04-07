<script setup lang="ts">

</script>

<template>
    <div class="w-full flex justify-between h-64 bg-card_color rounded p-5 border-l-8 border-tatra_blue text-white shadow-xl px-20">
        <div class="space-y-2">
            <div class="font-black text-3xl">Sporenie na dôchodok</div>
            <div class="flex space-x-2 text-xl font-light">
                <div>1388.43 €</div>
                <div>/</div>
                <div class="text-tatra_blue">10000.00 €</div>
            </div>
            <div class="w-96 h-4 mb-4 rounded-full bg-green-600">
                <div class="h-4 bg-white rounded-r-full" style="width: 70%"></div>
            </div>
            <div class="py-3">
                <div class="flex space-x-2 items-center">
                    <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
                    <div class="text-sm">Zainvestované peniaze</div>
                </div>
                <div class="flex space-x-2 items-center">
                    <div class="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <div class="text-sm">Zisk</div>
                </div>
            </div>
            <div class="flex items-end">
                <button class="bg-tatra_blue px-6 py-1">Spravovať investíciu</button>
            </div>
        </div>
        <div class="py-1">
            <img src="../assets/fig/chart.png" width="500">
        </div>
    </div>
</template>
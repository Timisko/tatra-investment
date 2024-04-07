<script lang setup="ts">

</script>

<template>
    <div class="bg-card_color rounded drop-shadow-lg h-96 p-5 space-y-5 text-white">
        <div class="flex space-x-5">
            <img src="../assets/fig/user-icon.png" width="75" />
            <div class="flex flex-col justify-center">
                <div class="text-2xl font-medium">Oliver Richtárik</div>
                <div class="text-xs font-light">123456</div>
            </div>
        </div>
        <div>
            <div class="text-2xl text-green-600">135,86%</div>
            <div class="text-lg">Zisk za posledných 30 dní</div>
        </div>
        <div>
            <div class="flex justify-between text-sm">
                <div>Celkové zisky</div>
                <div>252019.12</div>
            </div>
            <div class="flex justify-between text-sm">
                <div>Maximálna strata</div>
                <div>5.67 %</div>
            </div>
            <div class="flex justify-between text-sm">
                <div>Risk ratio</div>
                <div>Low</div>
            </div>
            <div class="flex justify-between text-sm">
                <div>Počet sledovateľov</div>
                <div>327</div>
            </div>
        </div>
        <div class="flex justify-end pt-8">
            <button class="bg-tatra_blue px-7 rounded py-1.5 hover:bg-blue-500">Zobraziť</button>
        </div>
    </div>
</template>
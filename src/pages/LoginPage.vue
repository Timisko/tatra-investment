<script setup lang="ts">

import router from '@/router';

function redirectToHomePage() {
    router.push({ name: 'home' });
}

</script>

<!-- this is the template for login test -->

<template>
    <div class="flex">
        <div class="h-screen w-1/3 bg-black w-l p-8 text-white">
            <div class="w-full fadeIn-short">
                <img src="../assets/fig/tatralogo.png" width="100">
                <div class="py-10 space-y-8">
                    <div class="leading-tight font-medium text-4xl">
                        Sme svetovo najoceňovanejšia slovenská banka.<br>
                        Vďaka vám
                    </div>
                    <div class="text-lg font-extralight">
                        Ďakujeme, že nás inšpirujete k inováciám a my vám
                        môžeme prinášať to najlepšie digitálne bankovníctvo,
                        ktoré ocenil aj prestížny magazín Global Finance
                        titulom <span class="font-medium">Najinovatívnejšia banka v stednej a východnej Európe.</span>
                    </div>
                </div>
                <div class="relative">
                    <img src="../assets/fig/spinning-circle.gif" class="opacity-50">
                    <div class="absolute inset-0 flex justify-center items-center">
                        <img src="../assets/fig/short-logo.png" width="175">
                    </div>
                </div>
            </div>
        </div>
        <div class="h-screen w-full bg-main_color">
            <div class="h-full flex flex-col justify-center items-center fadeIn-long">
                <div class="w-96 space-y-8 text-white">
                    <div class="font-medium text-2xl">
                        Prihlásenie
                    </div>
                    <div class="flex flex-col space-y-2">
                        <div class="flex flex-col space-y-1">
                            <label>Prihlasovacie meno</label>
                            <input type="text" class="rounded bg-gray-400 p-2 text-black font-sans">
                        </div>
                        <div class="flex flex-col space-y-1">
                            <label>Heslo</label>
                            <input type="password" class="rounded bg-gray-400 p-2 text-black font-sans">
                        </div>
                    </div>
                    <div class="space-y-2">
                        <button class="px-8 py-2 rounded bg-tatra_blue hover:bg-blue-600" @click="redirectToHomePage">
                            Prihlásiť
                        </button>
                        <div class="flex space-x-3">
                            <div>Nemáš ešte účet?</div>
                            <button class="font-bold hover:text-gray-400">Zaregistruj sa</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>
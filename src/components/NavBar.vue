<script setup lang="ts">

</script>

<template>
    <div class="fadeIn-short bg-black text-white px-40 py-2 h-32 drop-shadow-2xl">
        <div class="w-full h-full flex space-x-8">
            <div class="flex h-full items-center">
                <img src="../assets/fig/short-logo.png"
                width="100">
            </div>
            <div class="h-full flex items-center space-x-6 py-2">
                <button @click="$router.push('/home')" class="h-full flex items-center text-xl hover:border-b-2 hover:border-tatra_blue transition-transform ease-in-out duration-300 hover:scale-105">Investície</button>
                <button @click="$router.push('/transactions')" class="h-full flex items-center text-xl hover:border-b-2 hover:border-tatra_blue transition-transform ease-in-out duration-300 hover:scale-105">Transakcie</button>
                <button @click="$router.push('/education')" class="h-full flex items-center text-xl hover:border-b-2 hover:border-tatra_blue transition-transform ease-in-out duration-300 hover:scale-105">Vzdelávanie</button>
                <button @click="$router.push('/profile')" class="h-full flex items-center text-xl hover:border-b-2 hover:border-tatra_blue transition-transform ease-in-out duration-300 hover:scale-105">Profil</button>
                <button @click="$router.push('/portfolios')" class="h-full flex items-center text-xl hover:border-b-2 hover:border-tatra_blue transition-transform ease-in-out duration-300 hover:scale-105">Portfólia</button>
            </div>
            <div class="flex-1 flex justify-end items-center space-x-20 py-2">
                <div class="text-xl font-thin">
                    Zostatok: 17.345,00 €
                </div>
                <div>
                    <button class="bg-red-600 text-white px-8 py-2 rounded hover:bg-red-700">Odhlásiť</button>
                </div>
            </div>
        </div>
    </div>
</template>
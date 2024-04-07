<script setup lang="ts">

</script>

<template>
    <div class="animate__fadeInLeft animate__animated h-full bg-sidebar_color w-72">
        <div class="py-40 text-white">
            <div class="flex flex-col space-y-5">
                <button @click="$router.replace('/education/available_tasks')" class="bg-sidebar_btn_color mx-7 py-2">Dostupné úlohy</button>
                <button @click="$router.replace('/education/done_tasks')" class="bg-sidebar_btn_color mx-7 py-2">Splnené úlohy</button>
                <button @click="$router.replace('/education/locked_tasks')" class="bg-sidebar_btn_color mx-7 py-2">Uzamknuté úlohy</button>
                <button @click="$router.replace('/education/educational_videos')" class="bg-sidebar_btn_color mx-7 py-2">Edukačné videá</button>
                <button @click="$router.replace('/education/interesting_articles')" class="bg-sidebar_btn_color mx-7 py-2">Zaujímavé články</button>
            </div>
        </div>
    </div>
</template>
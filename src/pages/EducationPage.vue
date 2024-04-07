<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
import EducationSideBar from "@/components/EducationSideBar.vue";
</script>

<template>
    <div class="bg-main_color w-full h-screen">
        <NavBar></NavBar>

        <div class="h-full flex">
            <div class="h-full">
                <EducationSideBar />
            </div>
            <div class="w-full h-full px-20">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>
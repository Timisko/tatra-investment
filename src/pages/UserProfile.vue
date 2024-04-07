<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";

</script>

<template>
    <div class="bg-main_color w-full h-screen">
        <NavBar />

        <div>
            User {{ $route.params.id }}
        </div>
    </div>
</template>
<template>
    <div class="flex justify-center items-center w-full h-screen bg-gray-900">
        <div class="w-[80%] min-h-[80%] h-[80%] bg-company rounded-xl flex justify-between overflow-hidden">
            <LeftCompany/>
            <CenterCompany/>
            <RightCompany/>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import LeftCompany from "./components/LeftCompany.vue"
import CenterCompany from "./components/CenterCompany.vue"
import RightCompany from "./components/RightCompany.vue"
</script>

<template >
    <div class="w-[25%] bg-white h-full p-10">
        <div class="flex justify-end">
            <Button label="Lorem ipsum" size="px-4 py-2"/>
        </div>
        <div class="mt-8 flex flex-col justify-between h-[90%]">
            <Info/>
            <Info1/>
            <div class="text-gray-400 text-sm">
                Copiright Lorum ipsum
            </div>
        </div>
        
    </div>
</template>
<script setup lang="ts">
import Button from '../../../components/Button.vue';
import Info from '../../../components/Info.vue'
import Info1 from '../../../components/Info1.vue'
</script>

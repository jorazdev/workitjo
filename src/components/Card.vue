<template>
    <div class="border-company border-[2px] rounded-xl">
        <div class="flex gap-5 p-4 w-full">
            <div class="w-20 h-20 rounded-full">
                <img :src="company.logo" class="object-cover" alt="" />
            </div>
            <div class="w-[80%] space-y-2">
                <h1 class="text-lg font-bold">{{ company.company }}</h1>
                <p class="text-sm text-gray-500">
                    {{ company.about }}
                </p>
            </div>
        </div>
        <div class="p-4 bg-company flex justify-between items-center">
            <div class="text-sm text-gray-500">
                Vue: {{ company.vue }}
            </div>
            <div class=" bg-[#C0C0C0] py-2 px-8 rounded-md flex justify-center items-center text-white">
                <span class="text-[12px]">Voir</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import { ICompany } from '../interfaces/company.model';


interface ICardProps {
    company: ICompany
}

withDefaults(defineProps<ICardProps>(),{
    
})
</script>

<template>
    <div class="w-[50%] bg-white h-full p-10">
        <div class="flex justify-between items-center">
            <Input v-model="search" label="" type="full" class="w-[70%]"/>
            <div class="text-[12px] text-gray-400">
                <router-link to="">Lorum ipsum</router-link>/
                <router-link to="" class="font-bold text-gray-600">Lorum ipsum</router-link>
            </div>
        </div>

        <div class="mt-8 space-y-2 overflow-y-auto h-full">
            <Card v-for="company in companies" :company="company"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Input from '../../../components/Input.vue'
import Card from '../../../components/Card.vue'
import useCompany from '../../../composables/company'

const {companies, allCompany } = useCompany()

const search = ref<string>("Lorum ipsum")

onMounted(() => {
    allCompany()
})

</script>

<template>
    <div class="w-[25%] bg-company h-full p-10">
        <div class="flex flex-col justify-between h-full">
            <div class=" space-y-6">
                <img :src="logo" class="w-20 h-20">
                <Input label="Lorem ipsum dolor sit, amet"/>
                <Button label="Add items" icon="add" class="my-6"/>
            </div>
            <div class=" space-y-6">
                <ul class="flex justify-between items-center text-gray-700 text-[12px] font-bold">
                    <li>
                        <router-link to="/company"
                            class=" underline">
                            Lorem Ipsum
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/company"
                            class=" underline">
                            Lorem Ipsum
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/company"
                            class=" underline">
                            Lorem Ipsum
                        </router-link>
                    </li>
                </ul>
                <p class=" text-gray-500 text-[13px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Button from '../../../components/Button.vue'
import Input from '../../../components/Input.vue'

const logo = ref<string>("/images/logo-company.png")
</script>

<template>
    <div class="flex justify-center items-center w-full h-screen bg-gray-900">
        <div class="w-[80%] min-h-[80%] h-[90%] bg-white rounded-xl flex justify-between overflow-hidden p-4">
            <div class="w-[50%] bg-[#658AEB] rounded-2xl flex flex-col justify-between h-full p-40">
                <img :src="logo" class="w-24 h-24">
                <div>
                    <q class="text-company font-bold">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electroni
                </q>
                <div class="text-company font-bold mt-5 text-lg">John Doe</div>
                </div>
            </div>
            <div class="flex-1 h-full p-10 mt-[10%] mx-[6%]">
                <div class="space-y-4 w-[90%]">
                    <h1 class="text-4xl text-center">Welcome Back!</h1>
                    <Input type="primary" placeholder="Email"/>
                    <Input type="primary" placeholder="Password"/>
                    <Button label="Login" size="p-4" text="text-lg" 
                        @click="onLogin"/>
                    <div class="text-center">
                         OR
                    </div>
                    <Button bg="bg-transparent border-slate-800 border-[1px] text-gray-900" label="Login with Google" size="p-4" text="text-lg"/>
                    <Button bg="bg-transparent border-slate-800 border-[1px]  text-gray-900" label="Login with Facebook" size="p-4" text="text-lg"/>
                </div>
            </div>
            

        </div>
       
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../components/Input.vue';
import Button from '../../components/Button.vue';
import useAuth from '../../composables/auth'

const { onLogin } = useAuth()

const logo = ref<string>("/images/logo-company1.png")


</script>

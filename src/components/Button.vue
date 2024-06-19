<template>
    <div class="rounded-xl flex justify-center items-center text-white cursor-pointer" 
        :class="[size, bg]">
        <span class="material-icons" style="font-size: 12px;">
            {{ icon }}
        </span>
        <span class="text-[12px]" :class="[text]">{{ label }}</span>
    </div>
</template>
<script setup lang="ts">
interface IButtonProps {
    label: string
    icon?: string
    size?: string
    text?: string
    bg?: string
}

withDefaults(defineProps<IButtonProps>(), {
    label: '',
    icon: '',
    size: 'p-3',
    text: 'text-[12px]',
    bg: 'bg-primary'

})
</script>

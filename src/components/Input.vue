<template >
    <div>
        <div v-if="type == 'flat'" class=" border-b-black border-b-2">
            <span class="material-symbols-outlined">
                {{ label }}
            </span>
            <input v-model="model" type="text" class="bg-transparent flex-1 focus:outline-none ml-2">
        </div>

        <div v-if="type == 'full'" class=" bg-company px-6 py-3 rounded-xl border-slate-300 border-[1px]">
            <span class="material-symbols-outlined">
                {{ label }}
            </span>
            <input v-model="model" type="text" class="bg-transparent flex-1 focus:outline-none ml-2 w-full text-[12px]">
        </div>

        <div v-if="type == 'primary'" class=" bg-company bg-transparent px-6 py-3 rounded-xl border-slate-800 border-[1px]">
            <span class="material-symbols-outlined">
                {{ label }}
            </span>
            <input v-model="model" type="text" class="bg-transparent flex-1 focus:outline-none ml-2 w-full text-lg" :placeholder="placeholder">
        </div>
    </div>
    
</template>
<script setup lang="ts">

const model = defineModel()

interface IInputProps {
    label: string
    placeholder?: string
    type?: string // flat, full, primary
}

withDefaults(defineProps<IInputProps>(), {
    label: '',
    type: 'flat'
})
</script>

<template>
        <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
           
                <h1 class="text-xl font-medium">{{  title }}</h1>
                <slot></slot>
        </div>
</template>

<script setup>
    const {title} = defineProps({
        title: String
    })
</script>

<style>
</style>
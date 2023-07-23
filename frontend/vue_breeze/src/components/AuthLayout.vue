<template>
        <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 align-middle">
           
                <h1 class="text-xl text-red-400 font-medium">{{  title }}</h1>
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
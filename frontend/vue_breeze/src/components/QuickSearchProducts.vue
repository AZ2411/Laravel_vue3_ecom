<template lang="">
    <form
        id=""
        class="flex items-center w-56"
        @submit.prevent="store.searchProducts(1)"
    >
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
            <input
                v-model="name"
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
            />
        </div>
        <button
            type="submit"
            class="p-2.5 ml-2 text-sm font-medium text-white bg-cyan-400 rounded-lg border border-cyan-400 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
            <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
            </svg>
            <span class="sr-only">Search</span>
        </button>
    </form>
</template>
<script setup>
import { usecrudStore } from "../stores/crud";
import { useAuthStore } from "../stores/auth";
import { initFlowbite } from "flowbite";
import { ref, onMounted, watch, watchEffect } from "vue";
const store = usecrudStore();
const auth = useAuthStore();
const name = ref("");

watch(name, () => {
    if (name.value == "") {
        store.productsFilterStatus = false;
        store.searchKeyProducts = name.value;
        
        store.getProducts();
    } else {
        store.searchKeyProducts = name.value;
        
    }
});
</script>
<style lang=""></style>

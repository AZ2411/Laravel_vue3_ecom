<template>
    <div>
        <nav class="bg-slate-300 border-gray-200 dark:bg-gray-900">
            <div
                class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
            >
                <a href="https://flowbite.com" class="flex items-center">
                    
                    <span
                        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                        >Login-Register-test-Project</span
                    >
                </a>
                <div class="flex items-center">
                    <ul
                        class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm"
                    >
                        <li>
                            <router-link class="text-gray-900 dark:text-white hover:underline" to="/">Home</router-link>
                        </li>
                        <li v-if="!auth.user">
                           <router-link class="text-gray-900 dark:text-white hover:underline" to="/login">Login</router-link>
                        </li>
                        <li v-if="!auth.user">
                           <router-link class="text-gray-900 dark:text-white hover:underline" to="/Register">Register</router-link>
                        </li>
                        <li v-if="auth.user">
                           <form @submit.prevent="auth.handleLogout()" class="">
                                <button class="text-gray-900 dark:text-white hover:underline">Logout</button>
                           </form>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        
    </div>
</template>

<script setup>
 import { useAuthStore } from "../stores/auth"
const auth = useAuthStore();
</script>

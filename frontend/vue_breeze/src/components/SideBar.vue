<template>
    <div class="flex">
        <!-- aside -->
        <div v-if="auth.authUser">
            <aside
                id="default-sidebar"
                class="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div
                    class="h-full px-3 py-4 overflow-y-auto bg-gray-400 dark:bg-gray-800"
                >
                    <ul class="space-y-2 font-medium">
                        <li>
                            <router-link
                                class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700"
                                to="/"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    />
                                </svg>

                                <span class="ml-3">Home</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700"
                                to="/product"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                    />
                                </svg>

                                <span class="ml-3">Products</span>
                            </router-link>
                            <router-link
                                class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-slate-800 dark:hover:bg-gray-700"
                                to="/category"
                            >
                               
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                                    />
                                </svg>

                                <span class="ml-3">Category</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>

        <div class="m-3 w-full h-screen">
            <div class="p-2">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "../stores/auth.js";
const auth = useAuthStore();
const status = auth.authUser;
console.log("🚀 ~ file: SideBar.vue:75 ~ status:", status);
</script>

<style></style>

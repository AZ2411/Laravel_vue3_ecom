<template>
    <div>
        <nav
            class="bg-zinc-100 border-gray-200 z-20 top-0 left-0 flex h-16 items-center justify-between"
        >
            <div class="ml-8 flex">
                <h2 class="lg:text-4xl text-lg text-red-500" id="header_h2">
                    It Flash
                    <small v-if="!auth.authUser" class="text-lg text-black"
                        >Mobile and Electronic</small
                    ><small v-if="auth.authUser" class="text-lg text-black"
                        >Admin</small
                    >
                </h2>
            </div>
            <div class="flex mx-10 rounded-lg bg-red-400 p-0" >
                <router-link
                    class="mr-2 ml-5 my-2 text-white  hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium text-sm px-4 py-2.5 text-center items-center"
                    to="/" @click="auth.route == 'Landing'"
                    >Shopping Page</router-link
                >
                <router-link
                    class="my-2 text-white  hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium  text-sm px-4 py-2.5 text-center items-center"
                    to="/login" v-if="!auth.authUser"
                    >Login</router-link
                >
                <router-link
                    class="my-2 text-white  hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium  text-sm px-4 py-2.5 text-center items-center"
                    to="/Register" v-if="!auth.authUser"
                    >Register</router-link
                >
                <router-link
                    class="my-2 text-white  hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium  text-sm px-4 py-2.5 text-center items-center"
                    to="/Register"
                    >Order</router-link
                >
                <router-link
                    class="my-2 text-white  hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium  text-sm px-4 py-2.5 text-center items-center"
                    to="/db"
                    >Go to DB</router-link
                >
                <div class="mx-6" v-if="auth.authUser">
                <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="my-2 text-white  hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium text-sm px-4 py-2.5 text-center items-center flex"
                    type="button"
                >
                    User Option
                    <svg
                        class="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div
                    id="dropdown"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                    <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                    >
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >Profile</a
                            >
                        </li>
                        <li>
                            <a
                                href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >Settings</a
                            >
                        </li>
                        <li>
                            <form
                                @submit.prevent="auth.handleLogout()"
                                class=""
                            >
                                <button
                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Sign out
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            
        </nav>
        <div v-if="!auth.authUser || auth.route == 'Landing'">
            <slot></slot>
        </div>
        <div v-if="auth.authUser && auth.route != 'Landing'">
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span class="sr-only">Open sidebar</span>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>
            <aside
                id="default-sidebar"
                style="height: calc(100vh - 64px); background-color: #ecf0f1"
                class="relative flex"
                aria-label="Sidebar"
            >
                <div
                    class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 w-52"
                >
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                                    ></path>
                                    <path
                                        d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
                                    ></path>
                                </svg>
                                <span class="ml-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <router-link
                                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                to="/product"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                                    />
                                </svg>

                                <span class="ml-3">Products</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                to="/category"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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

                <div
                    class="p-2 border-2 border-gray-200 rounded-lg dark:border-gray-700 w-full h-full"
                >
                    <slot></slot>
                </div>
            </aside>
        </div>
    </div>
</template>

<script setup>
import { ref,onMounted } from "vue";

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { initFlowbite } from "flowbite";
import { AdjustmentsIcon } from "@vue-hero-icons/outline";
import { useAuthStore } from "../stores/auth";
import { reactive } from "vue";
const auth = useAuthStore();
onMounted(async () => {
    initFlowbite();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap");

#header_h2 {
    font-family: "Abril Fatface", cursive;
}
</style>

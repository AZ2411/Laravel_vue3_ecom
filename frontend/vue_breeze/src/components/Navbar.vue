<template>
    <div>
        <nav class="bg-slate-300 border-gray-200 dark:bg-gray-900">
            <div
                class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"
            >
                <a href="https://flowbite.com" class="flex items-center">
                    <span
                        class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white  text-violet-500"
                        >It & Electronic Store</span
                    >
                </a>
                <div class="flex items-center" v-if="auth.authUser">
                    <ul
                        class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm"
                    >
                        <div class="dropdown">
                            <div class="text-center">
                                <Menu
                                    as="div"
                                    class="relative inline-block text-left"
                                >
                                    <div>
                                        <MenuButton
                                            class="inline-flex w-full justify-center rounded-md bg-white text-violet-500  px-4 py-2 text-sm font-medium hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                        >
                                            <p class="">{{ auth.user.name }}</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="w-6 h-6 "
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                                                />
                                            </svg>
                                        </MenuButton>
                                    </div>

                                    <transition
                                        enter-active-class="transition duration-100 ease-out"
                                        enter-from-class="transform scale-95 opacity-0"
                                        enter-to-class="transform scale-100 opacity-100"
                                        leave-active-class="transition duration-75 ease-in"
                                        leave-from-class="transform scale-100 opacity-100"
                                        leave-to-class="transform scale-95 opacity-0"
                                    >
                                        <MenuItems
                                            class="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <div class="px-1 py-1">
                                                <MenuItem v-slot="{ active }">
                                                    <form
                                                        @submit.prevent="
                                                            auth.handleLogout()
                                                        "
                                                        class=""
                                                    >
                                                        <button
                                                            :class="[
                                                                active
                                                                    ? 'bg-violet-500 text-white'
                                                                    : 'text-gray-900',
                                                                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                                            ]"
                                                        >
                                                            Sign out
                                                        </button>
                                                    </form>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                            </div>
                        </div>

                       
                    </ul>
                </div>
                <div>
                    <ul  class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <router-link 
                                v-if="!auth.authUser"
                                class="text-gray-900 dark:text-white hover:underline"
                                to="/login"
                                >Login</router-link
                            >
                        </li>
                        <li>
                            <router-link 
                            v-if="!auth.authUser"
                                class="text-gray-900 dark:text-white hover:underline"
                                to="/Register"
                                >Register</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { AdjustmentsIcon } from "@vue-hero-icons/outline";
import { useAuthStore } from "../stores/auth";
import { reactive } from "vue";
const auth = useAuthStore();
</script>

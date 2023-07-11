<template>
    <div class="">
        <div class="mb-3">
            <div
                class="block space-y-4 md:flex md:space-y-0 md:space-x-4"
            ></div>
            <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                type="button"
            >
                Create
            </button>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
                class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
                <thead
                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">No</th>
                        <th scope="col" class="px-6 py-3">Category</th>
                        <th scope="col" class="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        v-for="(category, index) in store.categories"
                    >
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ index + 1 }}
                        </th>

                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ category.category }}
                        </th>
                        <th>
                            <router-link
                                :to="{
                                    name: 'categoryEdit',
                                    params: { id: category.id },
                                }"
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                >Edit</router-link
                            ><button
                                class="bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-bold py-2 px-4 rounded-full ml-1"
                            >
                                Show
                            </button>
                            <button
                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-1"
                                @click="store.deleteCategory(category.id)"
                            >
                                Delete
                            </button>
                        </th>
                    </tr>
                </tbody>
                
            </table>
            <hr class="">
            <div class="flex justify-center mb-3">
                    <pagination
                    class=""
                    v-if="store.categories_raw"
                    :current="store.categories_raw.current_page"
                    :total="store.categories_raw.total"
                    :per-page="store.categories_raw.per_page"
                    @page-changed="store.getCategories"
                >
                </pagination>
                </div>
            <div>
                
            </div>
        </div>
        <!-- Create Modal Start -->
        <div
            id="authentication-modal"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div class="relative w-full max-w-md max-h-full">
                <!-- Modal content -->
                <div
                    class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
                    <button
                        type="button"
                        id="createModalCloseBtn"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="authentication-modal"
                    >
                        <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="px-6 py-6 lg:px-8">
                        <h3
                            class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                        >
                            Create Category
                        </h3>
                        <form
                            class="space-y-6"
                            @submit.prevent="createCategory(form)"
                        >
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Category</label
                                >
                                <input
                                    type="text"
                                    name="category"
                                    id="email"
                                    v-model="form.name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { usecrudStore } from "../stores/crud";
import { initFlowbite } from "flowbite";
import { ref, onMounted } from "vue";

import Pagination from "../components/pagination.vue";
const store = usecrudStore();
const status = "paginate";
onMounted(async () => {
    await store.getCategories();
    initFlowbite();
});
const form = ref({
    name: "",
});
function createCategory(form) {
    store.handleAddCategory(form);
    document.getElementById("createModalCloseBtn").click();
}
</script>

<style></style>

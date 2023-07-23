<template>
    <div>
        <nav
            class="bg-red-400 border-gray-200 lg:w-full w-fit flex h-20 items-center justify-center z-50"
            :class="{ 'fixed top-0': scroll > 66 }"
        >
            <!-- logo -->
            <div>
                <img
                    src="http://localhost:8000/it_flash.png"
                    alt="image not found"
                    style="height: 150px; width: 200px"
                />
            </div>
            <!-- Search bar -->
            <div>
                <form
                    class="flex items-center w-60 lg:w-96"
                    @submit.prevent="store.searchProducts()"
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
                        class="p-2.5 ml-2 text-sm font-medium text-red-400 bg-white rounded-lg border border-red-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-red-300"
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
            </div>
            <!-- Cart Button -->
            <div class="ml-5">
                <button
                    id="dropdownDefaultButton"
                    @click="store.cartBtnStatus = !store.cartBtnStatus"
                    type="button"
                    class="flex"
                >
                    <svg
                        class="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                    </svg>
                    <span class="" v-if="store.cartItem_leng > 0">{{
                        store.cartItem_leng
                    }}</span>
                </button>
            </div>
        </nav>
        <div :class="{ shoppingPage: scroll > 66 }">
            <Shopping></Shopping>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import Shopping from "./Shopping.vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import { useUserStore } from "../../stores/user_view";
const store = useUserStore();
const auth = useAuthStore();
const route = useRoute();
const scroll = ref();
const name = ref("");
onMounted(async () => {
    await store.getAllProducts();
    store.RePullItem();
    auth.route = route.name;
    window.addEventListener("scroll", onScroll);
});
watch(name, () => {
    if (name.value == "") {
        store.searchKeyProducts = name.value;
        store.getAllProducts();
    } else {
        store.searchKeyProducts = name.value;
    }
});
function onScroll(e) {
    scroll.value = window.top.scrollY;
}
function cart_btn_function(params) {}
</script>
<style scoped>
.shoppingPage {
    margin-top: 80px;
}
</style>

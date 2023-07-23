<template>
    <div class="relative w-screen flex">
        <div
            v-if="store.products_detail_status"
            class="fixed z-50 detail-modal"
        >
            <div
                class="w-auto bg-white rounded-lg flex shadow-xl"
                v-if="store.detail_product"
            >
                <div class="p-5">
                    <img
                        style="width: 500px; height: 500px"
                        class="mx-auto w-80 rounded-2xl"
                        :src="
                            'http://localhost:8000/images/products/' +
                            store.detail_product.id +
                            '/' +
                            store.detail_product.profile
                        "
                        alt="Mountain"
                    />
                </div>
                <div class="p-4 flex flex-col h-full ">
                    <div
                        class="flex items-start justify-between rounded-t dark:border-gray-600"
                    >
                        <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                            @click="closeModal()"
                        >
                            <svg
                                class="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div>
                        <p
                            class="text-black font-bold text-xl text-center mb-5"
                        >
                            {{ store.detail_product.brand }}
                            {{ store.detail_product.name }}
                        </p>

                        <div class="flex justify-between mb-4">
                            <h3 class="text-sm text-gray-900">Brand</h3>
                            <h3 class="text-sm font-semibold text-gray-900">
                                {{ store.detail_product.brand }}
                            </h3>
                        </div>

                        <div class="flex justify-between mb-4">
                            <h3 class="text-sm text-gray-900">Modal</h3>
                            <h3 class="text-sm font-semibold text-gray-900">
                                {{ store.detail_product.name }}
                            </h3>
                        </div>

                        <div class="flex justify-between mb-4">
                            <h3 class="text-sm text-gray-900">Price</h3>
                            <h3 class="text-sm font-semibold text-gray-900">
                                $ {{ store.detail_product.price }}
                            </h3>
                        </div>
                        <div class="flex justify-between mb-4">
                            <h3 class="text-sm text-gray-900">Quantity</h3>
                            <h3 class="text-sm font-semibold text-gray-900">
                                {{ store.detail_product.qty }}
                            </h3>
                        </div>
                        <div>
                            <label for="" class="flex justify-center">Description</label>
                            <p class="lg:w-72 border-2 rounded-lg p-2 mb-5 border-red-400">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ullam tenetur, quo veritatis
                                at explicabo consectetur, fugit magnam debitis
                                numquam natus amet in, labore facilis.
                                Architecto qui ipsum nostrum dolorem sunt!
                            </p>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="custom-number-input h-10 w-32 mr-3">
                            <div
                                class="flex flex-row h-10 w-full rounded-lg relative bg-transparent"
                            >
                                <button
                                    data-action="decrement"
                                    class="bg-red-400 text-black hover:text-white hover:bg-red-500 h-full w-20 rounded-l cursor-pointer outline-none border-r-2"
                                >
                                    <span class="m-auto text-2xl font-thin"
                                        >−</span
                                    >
                                </button>
                                <input
                                    type="number"
                                    class="focus:outline-none text-center w-full bg-red-400 font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700 outline-none border-0 focus:border-0 focus:ring-0"
                                    name="custom-input-number"
                                    min="1"
                                    value="1"
                                />
                                <button
                                    data-action="increment"
                                    class="bg-red-400 text-black hover:text-white hover:bg-red-500 h-full w-20 rounded-r cursor-pointer outline-none border-l-2"
                                >
                                    <span class="m-auto text-2xl font-thin"
                                        >+</span
                                    >
                                </button>
                            </div>
                        </div>

                        <button
                            class="py-2 px-4 h-10 bg-red-400 text-white rounded hover:bg-red-500 active:bg-red-600 disabled:opacity-50 w-full flex items-center justify-center"
                        >
                            Add to order
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useUserStore } from "../../stores/user_view";
import { onMounted, onUpdated, onUnmounted } from "vue";

const store = useUserStore();

const closeModal = () => {
    store.products_detail_status = false;
    store.detail_product = null;
};
</script>
<style scoped>
.detail-modal {
    top: 25%;
    justify-content: center;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.custom-number-input input:focus {
    outline: none !important;
}

.custom-number-input button:focus {
    outline: none !important;
}
</style>

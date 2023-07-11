<template>
    <div
        v-if="store.cartBtnStatus"
        style=""
        class="z-50 bg-gray-300 divide-y divide-gray-100 rounded-lg shadow cart overflow-y-scroll h-auto max-h-screen"
    >
        <div class="relative overflow-x-auto m-3 bg-gray-300">
            <table
                class="w-full text-sm text-left text-gray-500 "
            >
                <thead
                    class="text-xs text-gray-700 uppercase"
                >
                    <tr>
                        <th scope="col" class="px-6 py-3">Product name</th>

                        <th scope="col" class="px-6 py-3">Qty</th>
                        <th scope="col" class="px-6 py-3">Price</th>
                        <th scope="col" class="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        class=" border-b dark:bg-gray-800 dark:border-gray-700"
                        v-for="item in store.cartItem"
                    >
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            {{ item.brand }} {{ item.name }}
                        </th>

                        <td class="px-6 py-4">
                            <input
                                type="number"
                                :value="item.qty"
                                class="border-0 p-0 m-0 w-10 focus:ring-0 input_number bg-transparent"
                                min="1"
                            />
                        </td>
                        <td class="px-6 py-4">${{ item.price }}</td>
                        <td>
                            <button 
                            @click="store.deleteProductFromCart(item.id)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-4 h-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </td>
                    </tr>

                    <tr class="bg-white dark:bg-gray-800">
                        <td colspan="2"></td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-between w-full">
                <div>
                    <button
                        class="mr-2 ml-5 my-2 text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium text-sm px-4 py-2.5 text-center items-center"
                    >
                        Proceed To Checkout
                    </button>
                </div>
                <div class="flex">
                    <p class="px-6 py-4">Total</p>
                    <p class="px-6 py-4">${{ store.TotalCost }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useUserStore } from "../../stores/user_view";
const store = useUserStore();
const scroll = ref();
onMounted(async () => {
    initFlowbite();
    window.addEventListener("scroll", onScroll);
});
function onScroll(e) {
    scroll.value = window.top.scrollY;
}
</script>
<style scoped>
.input_number::-webkit-inner-spin-button,
.input_number::-webkit-outer-spin-button {
    opacity: 1;
}
.cart {
    width: 600px;
}
</style>

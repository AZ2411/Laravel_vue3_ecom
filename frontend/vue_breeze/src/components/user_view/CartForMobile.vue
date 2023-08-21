<template>
    <div
        style=""
        class="bg-gray-100 right-0 "
        
    >
        <table class="text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase">
                <tr>
                    <th scope="col" class="px-3 py-1">Product name</th>
                    <th scope="col" class="px-3 py-1">Qty</th>
                    <th scope="col" class="px-3 py-1">Price</th>
                </tr>
            </thead>
            <tbody class="">
                <tr
                    class="border-b dark:bg-gray-800 dark:border-gray-700 h-14"
                    v-for="item in store.cartItem"
                >
                    <td
                        style="width: 200px"
                        scope="row"
                        class="px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-between"
                    >
                        {{ item.brand }} {{ item.name }}
                        <button @click="store.deleteProductFromCart(item.id)">
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

                    <td class="px-6">
                        <input
                            type="number"
                            :value="item.qty"
                            class="border-0 p-0 m-0 w-10 focus:ring-0 input_number bg-transparent"
                            min="1"
                        />
                    </td>
                    <td class="px-6">${{ item.price }}</td>
                </tr>
            </tbody>
        </table>

        <div class="flex justify-between w-auto">
            <div>
                <button
                    class="mr-2 ml-5 my-2 text-white bg-red-400 rounded-lg hover:bg-red-500 focus:ring-2 focus:outline-none focus:ring-red-300 font-medium text-sm px-4 py-2.5 text-center items-center"
                >
                    Proceed To Checkout
                </button>
            </div>
            <div class="flex">
                <p class="px-6 py-2">Total</p>
                <p class="px-6 py-2">${{ store.TotalCost }}</p>
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
.position_top {
    top: 80px;
}
</style>

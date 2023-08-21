<template class="relative">
    <!-- <div
        class="right-0 " id="cart_holder"
        :class="{ 'fixed cart-top': scroll > 66, 'absolute': scroll < 66}"
    >
        <cart/>
    </div> -->
    <div class="" :class="{ hidden: !store.cartBtnStatus }">
        <div style="width: 100vw" class="lg:hidden w-screen absolute">
                <cartformobile />
            </div>
    </div>
    <div class="lg:flex justify-center lg:justify-around bg-gray-100" :class="{ hidden: store.cartBtnStatus, flex: !store.cartBtnStatus}">
        <div
            class="flex justify-center min-h-screen w-full"
            :class="{
                'lg:w-auto mx-5': store.cartBtnStatus,
                'lg:w-screen ': !store.cartBtnStatus,
            }"
        >
            <div
                v-if="store.products_search_error"
                class="text-center align-middle"
            >
                <span class="text-2xl">{{ store.products_search_error }}</span>
            </div>
            <div
                v-if="store.products"
                class="md:grid md:grid-cols-2 md:gap-3 lg:gap-6 lg:grid-cols-3 mt-10"
            >
                <div v-for="product in store.products" v-if="store.loading">
                    <Product :product="product" />
                </div>
            </div>
            <div v-if="!store.loading">
                <SkeletonCard />
            </div>
        </div>
        <div class="" :class="{ hidden: !store.cartBtnStatus }">
            <div class="hidden lg:flex cart-holder">
                <cart />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { initFlowbite } from "flowbite";
import Product from "./Product.vue";
import { useUserStore } from "../../stores/user_view";
import cart from "../../components/user_view/cart.vue";
import cartformobile from "../../components/user_view/CartForMobile.vue";

import SkeletonCard from "../../components/user_view/SkeletonComponents.vue";
const store = useUserStore();
const scroll = ref(0);
onMounted(async () => {
    initFlowbite();
    window.addEventListener("scroll", onScroll);
});
function onScroll(e) {
    scroll.value = window.top.scrollY;
}
</script>
<style scoped>
.cart-top {
    top: 80px;
}
.cart-holder {
    width: 400px;
}
.cart-animation {
    transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
}
</style>

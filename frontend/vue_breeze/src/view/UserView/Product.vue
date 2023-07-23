<template>
    <div
        class="z-0 max-w-sm mb-5 rounded-2xl overflow-hidden shadow-lg h-80 bg-white main_box"
        v-if="props"
    >
        <div class="box">
            <img
                class="img"
                :src="
                    'http://localhost:8000/images/products/' +
                    product.id +
                    '/' +
                    product.profile
                "
                alt="Mountain"
            />
        </div>

        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
                {{ props.product.brand }} {{ props.product.name }}
            </div>
            <div class="flex justify-between">
                <div>
                    <span>Price - {{ props.product.price }} $</span>
                    <br />
                    <span>Qty - {{ props.product.qty }}</span>
                </div>

                <div>
                     <button
                     @click="openDetailmodal(props.product)"
                        class="lg:mr-2 text-white bg-red-400 hover:bg-red-500 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                    >
                        Details
                    </button>
                    <button
                        @click="
                            addToCart(
                                props.product.id,
                                props.product.name,
                                props.product.brand,
                                props.product.price
                            )
                        "
                        class="text-white bg-red-400 hover:bg-red-500 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { useUserStore } from "../../stores/user_view";


const store = useUserStore();

const props = defineProps(["product"]);

function addToCart(id, name, brand, price) {
    let item = {
        id: id,
        name: name,
        brand: brand,
        qty: 1,
        price: +price,
    };
    store.addToCart(item);
}
const openDetailmodal = (product) => {
    store.products_detail_status = true;
    store.detail_product = product
    console.log("🚀 ~ file: Product.vue:78 ~ openDetailmodal ~ product:", product)  
}

</script>
<style scoped>
.box {
    width: 320px;
    height: 200px;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.box .img {
    margin: 10px 10px 10px 10px;
    object-fit: cover;
    transition: transform 0.4s ease-in;
}
.main_box:hover img {
    transform: scale(1.1);
}
</style>

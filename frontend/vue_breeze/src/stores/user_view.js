import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user_view", {
    state: () => ({
        products_raw: null,
        cartItem: [],
        TotalCost: 0,
        loading: true,
        cartBtnStatus: false,
        searchKeyProducts: null,
        products_search_error: null,
        products_detail_status: false,
        detail_product: null
        // cartItem_leng: null
    }),
    getters: {
        products: (state) => state.products_raw,
        cartItem_leng: (state) => state.cartItem?.length,
    },
    actions: {
        async getToken() {
            const data = await axios.get("/sanctum/csrf-cookie");
        },
        async getAllProducts() {
            this.products_search_error = null
            this.loading = false;
            await this.getToken();
            const data = await axios.get(`/api/products?status=all`);
            this.products_raw = data.data.products;
            this.loading = true
            
        },
        async searchProducts() {
            this.loading = false;
            await this.getToken();
            const data = await axios.get(
                `/api/products?name=${this.searchKeyProducts}`
            );
            this.products_raw = data.data.products;
            console.log(data.data);
            this.products_search_error = data.data.search_error_message;
            this.loading = true;
        },
        addToCart(item) {
            let status = 1;
            if (JSON.parse(localStorage.getItem("item"))) {
                this.cartItem = JSON.parse(localStorage.getItem("item"));
                for (let index = 0; index < this.cartItem.length; index++) {
                    if (this.cartItem[index].id == item.id) {
                        this.cartItem[index].qty += 1;

                        localStorage.setItem(
                            "item",
                            JSON.stringify(this.cartItem)
                        );

                        status = 2;

                        break;
                    }
                }
            }

            if (status == 1) {
                this.cartItem.push(item);
                localStorage.setItem("item", JSON.stringify(this.cartItem));
            }
            this.TotalCost = item.price + this.TotalCost;
            // this.cartItem_leng = this.cartItem.length
        },
        deleteProductFromCart(id) {
            const cartItem = JSON.parse(localStorage.getItem("item"));
            const RemoveObject = cartItem.findIndex((obj) => obj.id === id);
            if (RemoveObject > -1) {
                cartItem.splice(RemoveObject, 1);
            }
            localStorage.setItem("item", JSON.stringify(cartItem));
            this.cartItem = cartItem;
            this.countTotalCost();
        },
        countTotalCost() {
            this.TotalCost = 0;
            this.cartItem.forEach((Item) => {
                this.TotalCost += Item.price * Item.qty;
            });
        },
        RePullItem() {
            if (JSON.parse(localStorage.getItem("item"))) {
                this.cartItem = JSON.parse(localStorage.getItem("item"));
                this.cartItem.forEach((Item) => {
                    this.TotalCost = this.TotalCost + Item.price;
                });
            }
        },
    },
});

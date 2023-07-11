import { defineStore } from "pinia";
import axios from "axios";

export const productStore = defineStore("crud", {
    state: () => ({
        products_raw: null,
    }),
    getters: {
        products: (state) => state.products_raw
    },
    actions: {
        async getToken() {
            const data = await axios.get("/sanctum/csrf-cookie");
        },
        async getProducts() {
            await this.getToken();
            const data = await axios.get("/api/products");
            this.products_raw = data.data.data;
        },
        
    },
});

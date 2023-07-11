import { defineStore } from "pinia";
import axios from "axios";

export const usecrudStore = defineStore("crud", {
    state: () => ({
        categories: null,
        category: null,
        categories_raw: null,
        products_raw: null,
        product_profile: null,
        success: null,
        product_form_errors: null,
        error_pulling: "",
        filterProducts: null,
        product_page: 1,
        product_page_count: null,
        product_loading: true,
        product_number: null,
        products_for_pagination: null,
        productsFilterStatus: false,
        searchKeyProducts: null
    }),
    getters: {
        
        products: (state) => state.filterProducts,
    },
    actions: {
        async getToken() {
            const data = await axios.get("/sanctum/csrf-cookie");
        },
        async showCategory(id) {
            await this.getToken();
            const data = await axios.get(`/api/categories/${id}`);
            this.category = data.data.data;
        },
        async getCategories(page = 1) {
            
            await this.getToken();
            const data = await axios.get(`/api/categories?page=${page}`);
            
            this.categories_raw = data.data.category;
            console.log('hello');
            this.categories = this.categories_raw.data;
            
        },
        async handleAddCategory(data) {
            await this.getToken();
            try {
                await axios.post("/api/categories_create", {
                    category: data.name,
                });
                await this.getCategories();
            } catch (error) {
                this.error_pulling = "something was wrong";
            }
        },
        async deleteCategory(id) {
            await this.getToken();
            if (confirm("Are you sure to delete this category ?")) {
                await axios.delete(`/api/category/${id}`).then((response) => {
                    this.getCategories();
                });
            }
        },
        async updateCategory(id, data) {
            await this.getToken();
            await axios.post(`/api/category_update/${id}`, {
                category: data,
            });
            this.router.push("/category");
        },
        async getProducts(page = 1) {
            
            this.product_loading = true;
            await this.getToken();
            const data = await axios.get(`/api/products?page=${page}`);
            this.products_raw = data.data.products;
            this.products_for_pagination = data.data.products_for_pagination;
            this.product_number = data.data.product_number;
            this.filterProducts = this.products_raw;
            this.product_loading = false;
        },
        async createProduct(form) {
            await this.getToken();
            try {
                const config = {
                    headers: {
                        "content-type": "multipart/form-data",
                    },
                };
                await axios
                    .post(
                        "/api/products",
                        {
                            name: form.name,
                            brand: form.brand,
                            description: form.description,
                            profile: form.profile,
                            price: form.price,
                            qty: form.qty,
                            user: form.user.id,
                            categories: form.categories,
                        },
                        config
                    )
                    .catch(function (error) {
                        if (error.response) {
                            let product_form_errors =
                                error.response.data.errors;
                        }
                    });
                await this.getProducts();
            } catch (error) {
                this.error_pulling = "something was wrong";
            }
        },
        async deleteProduct(id) {
            await this.getToken();
            if (confirm("Are you sure to delete this Product ?")) {
                await axios.delete(`/api/products/${id}`).then((response) => {
                    this.getProducts();
                });
            }
        },
        // filter(query){
        //     if (query == '') {
        //         this.filterProducts = this.products_raw
        //         return
        //     }
        //     this.filterProducts = this.products_raw.filter(product => {
        //         return(
        //             product.brand.toLowerCase().includes(query.toLowerCase()) ||
        //             product.name.toLowerCase().includes(query.toLowerCase())
        //         )
        //     })
        // }
        async searchProducts(page) {
            this.productsFilterStatus = true;
            this.product_loading = true;
            await this.getToken();
            const data = await axios.get(`/api/products?page=${page}&name=${this.searchKeyProducts}`);
            this.products_raw = data.data.products;
            this.products_for_pagination = data.data.products_for_pagination;
            this.filterProducts = this.products_raw;
            this.product_loading = false;
        },
    },
});

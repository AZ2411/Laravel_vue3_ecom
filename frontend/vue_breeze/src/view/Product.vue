<template>
    <div class="w-full h-full">
        <div class="flex justify-between">
            <button
                data-modal-target="ProductCreateModal"
                data-modal-toggle="ProductCreateModal"
                type="button"
                class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full my-3 inline"
            >
                Create
            </button>
            <QuickSearchProducts></QuickSearchProducts>
            <button
                class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full my-3 flex"
                type="button"
                @click="status = !status"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
                    />
                </svg>
                Change View
            </button>
        </div>
        <!-- Loaing Animation -->
        <div v-if="store.product_loading && status">
            <SkeletonCom></SkeletonCom>
        </div>
        <div
            v-if="store.product_loading && !status"
            class="flex justify-center align-middle items-center"
        >
            <div class="flex justify-center items-center lg:h-60">
                <div
                    class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-violet-500"
                >
                    <div
                        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"
                    ></div>
                </div>
            </div>
        </div>

        <!-- Loaing Animation End -->
        <div v-if="!store.product_loading">
            <!-- Table -->

            <div
                v-if="!status"
                class="relative overflow-x-auto shadow-md sm:rounded-lg"
            >
                <table
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                        <tr>
                            <th scope="col" class="px-6 py-3">Brand</th>
                            <th scope="col" class="px-6 py-3">Product name</th>
                            <th scope="col" class="px-6 py-3">Price</th>
                            <th scope="col" class="px-6 py-3">QTY</th>
                            <th scope="col" class="px-6 py-3">Categories</th>
                            <th scope="col" class="px-6 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in store.products">
                            <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {{ product.brand }}
                            </th>
                            <td class="px-6 py-4">
                                {{ product.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ product.price }}
                            </td>
                            <td class="px-6 py-4">
                                {{ product.qty }}
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    v-for="category in product.categories"
                                    class="p-1 rounded-md bg-slate-500 text-white m-1"
                                    >{{ category.category }}</span
                                >
                            </td>
                            <td class="px-6 py-4">
                                <a
                                    href="#"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    >Edit</a
                                >
                                <a
                                    href="#"
                                    class="bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-bold py-2 px-4 rounded-full ml-1"
                                    >Show</a
                                >
                                <a
                                    @click="store.deleteProduct(product.id)"
                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-1"
                                    >Delete</a
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Table -->
            <!-- data div -->

            <div v-if="status" class="xl:grid xl:grid-cols-2 xl:gap-3">
                <div
                    v-for="product in store.products"
                    href="#"
                    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:mt-3 sm:mt-3"
                >
                    <img
                        class="object-fill w-auto rounded-lg h-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-5"
                        :src="
                            'http://localhost:8000/images/products/' +
                            product.id +
                            '/' +
                            product.profile
                        "
                        alt=""
                    />
                    <div
                        class="flex flex-col justify-between p-4 leading-normal"
                    >
                        <h5
                            class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
                        >
                            {{ product.brand }} {{ product.name }}
                            <span class="text-base font-thin ml-3"
                                >(Price - ${{ product.price }})</span
                            >
                            <span class="text-red-500 ml-3 text-base font-thin">
                                Qty- {{ product.qty }}
                            </span>
                        </h5>
                        <p
                            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Debitis mollitia ad repellendus, cupiditate
                            ... ( see more to detail)
                        </p>

                        <div></div>
                        <div class="flex justify-end">
                            <button
                                @click="ProductShowFunction(product)"
                                type="button"
                                data-modal-target="ProductShowModal"
                                data-modal-toggle="ProductShowModal"
                                href="#"
                                class="bg-yellow-300 hover:bg-yellow-400 text-gray-700 font-bold py-2 px-4 rounded-full ml-1"
                            >
                                Show & Edit
                            </button>
                            <a
                                @click="store.deleteProduct(product.id)"
                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-1"
                                >Delete</a
                            >
                        </div>
                    </div>
                </div>
            </div>
            <!-- data div -->

            <!-- Pagination Start -->
            <div class="flex justify-center" v-if="!store.productsFilterStatus">
                <pagination
                    :current="store.products_for_pagination.current_page"
                    :total="store.products_for_pagination.total"
                    :per-page="store.products_for_pagination.per_page"
                    @page-changed="store.getProducts"
                >
                </pagination>
            </div>
            <div
                id="filter"
                class="flex justify-center"
                v-if="store.productsFilterStatus"
            >
                <pagination
                    :current="store.products_for_pagination.current_page"
                    :total="store.products_for_pagination.total"
                    :per-page="store.products_for_pagination.per_page"
                    @page-changed="store.searchProducts"
                >
                </pagination>
            </div>

            <!-- Pagination End -->
        </div>
        <!--Create Modal content -->
        <div
            id="ProductCreateModal"
            data-modal-backdrop="static"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div class="relative w-full max-w-4xl max-h-full">
                <div
                    class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
                    <button
                        type="button"
                        id="createModalCloseBtn"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="ProductCreateModal"
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
                            Create New Product
                        </h3>
                        <form
                            class="grid grid-cols-2 gap-4"
                            @submit.prevent="createProduct(form)"
                            enctype="multipart/form-data"
                        >
                            <div>
                                <div>
                                    <label
                                        for="brand"
                                        class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                        >Brand</label
                                    >
                                    <input
                                        v-model="form.brand"
                                        type="text"
                                        name="category"
                                        id="brand"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="product_name"
                                        class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                        >Product Name</label
                                    >
                                    <input
                                        v-model="form.name"
                                        type="text"
                                        name="category"
                                        id="product_name"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                    <div
                                        v-if="store?.product_form_errors"
                                        class="my-3 text-center border-2 border-red-400 rounded-lg border-opacity-25 bg-red-300 bg-opacity-30"
                                    >
                                        <p class="text-red-600">
                                            {{
                                                store.product_form_errors
                                                    .name[0]
                                            }}
                                        </p>
                                        <button
                                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full my-3 inline"
                                        >
                                            Increase qty of this product
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="desc"
                                        class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                        >Description</label
                                    >
                                    <textarea
                                        v-model="form.description"
                                        id="desc"
                                        rows="4"
                                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    ></textarea>
                                </div>
                                <div class="flex">
                                    <div class="mr-3">
                                        <label
                                            for="price"
                                            class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                            >Price</label
                                        >
                                        <input
                                            v-model="form.price"
                                            type="number"
                                            name="category"
                                            id="price"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div class="">
                                        <label
                                            for="qty"
                                            class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                                            >QTY</label
                                        >
                                        <input
                                            v-model="form.qty"
                                            type="number"
                                            name="category"
                                            id="qty"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        for="countries"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >Categories</label
                                    >
                                    <select
                                        v-model="form.categories"
                                        multiple
                                        id="countries"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option
                                            v-for="category in store.categories"
                                            :value="category.id"
                                        >
                                            {{ category.category }}
                                        </option>
                                    </select>
                                </div>
                                <button
                                    type="submit"
                                    class="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add
                                </button>
                            </div>
                            <div>
                                <div class="h-10 w-auto text-center">
                                    <div
                                        class="imagePreviewWrapper border-2 rounded-xl text-center"
                                        :style="{
                                            'background-image': `url(${previewImage})`,
                                        }"
                                        @click="selectImage"
                                    >
                                        <span v-if="imageName == null" class=""
                                            >Add Image</span
                                        >
                                    </div>

                                    <span
                                        v-if="imageName != null"
                                        class="border-2 p-3 rounded-2xl"
                                        >{{ imageName }}</span
                                    >
                                    <input
                                        hidden
                                        ref="fileInput"
                                        type="file"
                                        @input="pickFile"
                                        @change="onChange"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!--Create Modal content End -->
            </div>
        </div>
        <!-- Show Modal -->
        <ProductShow />
    </div>
</template>

<script setup>
import { usecrudStore } from "../stores/crud";
import { useAuthStore } from "../stores/auth";
import QuickSearchProducts from "../components/BackendSerarchBar.vue";
import { initFlowbite } from "flowbite";
import { ref, onMounted } from "vue";
import Pagination from "../components/pagination.vue";
import SkeletonCom from "../components/SkeletonComponents.vue";
import ProductShow from "../components/ProductShow.vue";
const store = usecrudStore();
const auth = useAuthStore();
const Categorystatus = "paginate";
onMounted(async () => {
    store.getProducts();
    await store.getCategories(Categorystatus);
    initFlowbite();
});
function ProductShowFunction(product) {
    store.product_update_form = product;
}
const form = ref({
    name: "",
    brand: "",
    description: "",
    profile: [],
    price: null,
    qty: null,
    user: auth.user,
    categories: [],
});
const onChange = (e) => {
    form.value.profile = e.target.files[0];
    console.log("blah blah: ", form.value);
};
function createProduct(params) {
    store.product_form_errors = null;
    store.createProduct(params);
    setTimeout(() => {
        if (!store.product_form_errors) {
            document.getElementById("createModalCloseBtn").click();
        }
    }, 2000);
}
function OpenPrductModal() {
    store.product_create_modal_status = true;
}
const fileInput = ref();
const previewImage = ref(null);
const imageName = ref();
const status = ref(true);
function selectImage() {
    fileInput.value.click();
}
function pickFile() {
    const input = fileInput.value;
    const file = input.files;
    form.profile = file[0];
    store.product_profile = file[0];
    // console.log(store.product_profile);
    imageName.value = file[0].name;
    if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            previewImage.value = e.target.result;
        };
        reader.readAsDataURL(file[0]);
    }
}
</script>

<style scoped>
.imagePreviewWrapper {
    width: 400px;
    height: 350px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
body {
    background: #000;
}
#loading_svg {
    transform: translate(-50%, -50%);
    height: 50px;
    width: 50px;
}
</style>

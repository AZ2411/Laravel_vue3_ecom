<template lang="">
    <div
        id="ProductShowModal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
        <div class="relative w-auto max-w-6xl max-h-full">
            <!-- Modal content -->
            <div class="relative w-auto max-h-full">
                <div
                    class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                >
                    <button
                        type="button"
                        id="createModalCloseBtn"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-hide="ProductShowModal"
                        @click="CloseUpdateFormModal()"
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
                            {{ store.product_update_form?.brand }}
                            {{ store.product_update_form?.name }}
                        </h3>
                        <!-- Product Show DIV -->
                        <div v-if="!EditUiStauts" class="flex">
                            <div>
                                <div class="grid grid-cols-2 lg:w-96">
                                    <h3>Name</h3>
                                    <h3 class="font-bold">
                                        {{ store.product_update_form?.brand }}
                                        {{ store.product_update_form?.name }}
                                    </h3>
                                </div>
                                <div class="grid grid-cols-2 lg:w-96">
                                    <h3>Brand</h3>
                                    <h3 class="font-bold">
                                        {{ store.product_update_form?.brand }}
                                    </h3>
                                </div>
                                <div
                                    class="lg:w-96 border-2 border-red-400 rounded-lg mt-3"
                                >
                                    <h3 class="text-center">Description</h3>
                                    <h3 class="font-bold text-left p-3">
                                        Lorem, ipsum dolor sit amet consectetur
                                        adipisicing elit. Quasi dolorem ratione
                                        libero magnam fugiat, officia itaque.
                                        Facilis reprehenderit praesentium
                                        provident laudantium laborum qui,
                                        possimus modi quisquam eveniet autem
                                        commodi exercitationem!
                                    </h3>
                                </div>
                            </div>
                            <div
                                style="width: 1px"
                                class="h-auto mx-5 bg-red-500 hidden lg:flex"
                            ></div>
                            <div>
                                <div class="grid grid-cols-2 lg:w-52">
                                    <h3>Price</h3>
                                    <h3 class="font-bold">
                                        $ {{ store.product_update_form?.price }}
                                    </h3>
                                </div>
                                <div class="grid grid-cols-2 lg:w-52">
                                    <h3>Quantity</h3>
                                    <h3 class="font-bold">
                                        {{ store.product_update_form?.qty }}
                                    </h3>
                                </div>
                                <div
                                    class="lg:w-52 border-2 border-red-400 rounded-lg mt-3"
                                >
                                    <h3 class="text-center">Categories</h3>

                                    <div
                                        v-for="category in store
                                            .product_update_form?.categories"
                                        class="border-2 border-red-400 rounded-xl m-2 text-center bg-red-400 text-white"
                                    >
                                        <span>{{ category.category }}</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                style="width: 1px"
                                class="h-auto mx-5 bg-red-400 hidden lg:flex"
                            ></div>
                            <div class="lg:max-w-96">
                                <img
                                    :src="store.products_show_photo_url"
                                    alt=""
                                />
                            </div>
                        </div>
                        <form
                            v-if="EditUiStauts && !EditCategoriesStatus"
                            class="grid grid-cols-2 gap-4"
                            @submit.prevent="
                                store.updateProduct(
                                    form,
                                    store.product_update_form?.id
                                )
                            "
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
                                <button
                                    id="submitUpdateForm"
                                    v-if="!EditCategoriesStatus"
                                    @click="CloseModal()"
                                    type="submit"
                                    class="mt-3 w-fit text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Save Edit Product
                                </button>
                            </div>

                            <div v-if="!EditCategoriesStatus">
                                <div class="h-10 w-auto text-center">
                                    <div
                                        style="cursor: pointer"
                                        class="h-auto mb-5 p-5"
                                        @click="selectImage"
                                    >
                                        <img
                                            :src="previewImage"
                                            class="max-w-xs w-auto"
                                            alt=""
                                        />

                                        <span v-if="imageName == null" class=""
                                            >Add Image</span
                                        >
                                    </div>
                                    <span
                                        v-if="imageName != null"
                                        class="border-2 p-3 rounded-2xl max-w-32"
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
                        <div v-if="EditCategoriesStatus && EditUiStauts">
                            <label for="">Remove Categories</label>
                            <div
                                class="grid grid-cols-3 gap-2 border-2 border-red-500 mb-3 p-4 rounded-lg"
                            >
                                <button
                                    class="bg-red-400 text-white p-2 rounded-md text-xs flex justify-center"
                                    v-for="category in form.categories"
                                    @click="RemoveCategorie(category.id)"
                                >
                                    <span>{{ category.category }}</span>

                                    <svg
                                        aria-hidden="true"
                                        class="w-4 h-4"
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
                                </button>
                            </div>
                            <label for="">Add Categories</label>
                            <div
                                class="grid grid-cols-3 gap-2 border-2 border-red-500 rounded-lg p-4"
                            >
                                <button
                                    class="bg-red-400 text-white p-2 rounded-md text-xs flex justify-center"
                                    v-for="category in AddCategories"
                                    @click="AddCategory(category.id)"
                                >
                                    <span>{{ category.category }}</span>

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
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <button
                            v-if="EditUiStauts"
                            @click="EditCategoriesStatusChage()"
                            class="mt-3 w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <p v-if="EditCategoriesStatus2">Edit Category</p>
                            <p v-if="!EditCategoriesStatus2">Go Back</p>
                        </button>
                        <button
                            v-if="!EditUiStauts"
                            @click="EditUi"
                            type="button"
                            class="mt-3 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useAuthStore } from "../stores/auth";
import { usecrudStore } from "../stores/crud";
import { onUpdated, onBeforeUnmount, onUnmounted, ref } from "vue";
const store = usecrudStore();
const auth = useAuthStore();
const EditUiStauts = ref(false);
const props = defineProps(["product"]);
const form = ref({
    name: null,
    brand: null,
    description: "",
    profile: [],
    price: null,
    qty: null,
    user: auth.user,
    categories: [],
});

const fileInput = ref();
const previewImage = ref(null);
const imageName = ref();
const status = ref(true);
const EditCategoriesStatus = ref(false);
const EditCategoriesStatus2 = ref(true);
const AddCategories = ref([null]);
const RemoveErrorCategories = ref(null);
function selectImage() {
    fileInput.value.click();
}
const onChange = (e) => {
    form.value.profile = e.target.files[0];
};
function pickFile() {
    form.value.profile = [];
    const input = fileInput.value;
    const file = input.files;
    form.value.profile = file[0];
    store.product_profile = file[0];
    imageName.value = file[0].name;
    if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
            previewImage.value = null;
            previewImage.value = e.target.result;
        };
        reader.readAsDataURL(file[0]);
    }
}
function CloseUpdateFormModal() {
    EditUiStauts.value = false;
}
function EditUi() {
    form.value.name = store.product_update_form.name;
    form.value.brand = store.product_update_form.brand;
    form.value.description = store.product_update_form.description;
    form.value.profile = store.product_update_form.profile;
    form.value.price = store.product_update_form.price;
    form.value.qty = store.product_update_form.qty;
    form.value.categories = store.product_update_form.categories;
    form.value.user = store.product_update_form.user;
    EditUiStauts.value = true;
    previewImage.value =
        "http://localhost:8000/images/products/" +
        store.product_update_form.id +
        "/" +
        store.product_update_form.profile;
    imageName.value = store.product_update_form.profile;

    const onlyInA = onlyInLeft(
        store.categories,
        form.value.categories,
        isSameUser
    );
    const onlyInB = onlyInLeft(
        form.value.categories,
        store.categories,
        isSameUser
    );
    AddCategories.value = [...onlyInA, ...onlyInB];
}
function RemoveCategorie(categoryID) {
    if (form.value.categories.length > 1) {
        for (let index = 0; index < form.value.categories.length; index++) {
            if (form.value.categories[index].id === categoryID) {
                form.value.categories.splice(index, 1);
                break;
            }
        }
        const onlyInA = onlyInLeft(
            store.categories,
            form.value.categories,
            isSameUser
        );
        const onlyInB = onlyInLeft(
            form.value.categories,
            store.categories,
            isSameUser
        );
        AddCategories.value = [...onlyInA, ...onlyInB];
    } else {
        RemoveErrorCategories = "At least 1 categories need";
    }
}
function EditCategoriesStatusChage(params) {
    EditCategoriesStatus.value = !EditCategoriesStatus.value;
    EditCategoriesStatus2.value = !EditCategoriesStatus2.value;
}
function AddCategory(categoryID) {
    store.categories.forEach((cate) => {
        if (cate.id === categoryID) {
            form.value.categories.push(cate);
        }
    });
    const onlyInA = onlyInLeft(
        store.categories,
        form.value.categories,
        isSameUser
    );
    const onlyInB = onlyInLeft(
        form.value.categories,
        store.categories,
        isSameUser
    );
    AddCategories.value = [...onlyInA, ...onlyInB];
}
function CloseModal() {
    
    setTimeout(() => {
        console.log("is working");
        document.getElementById("createModalCloseBtn").click();
    }, 2000);
}
const isSameUser = (a, b) => a.id === b.id;
const onlyInLeft = (left, right, compareFunction) =>
    left.filter(
        (leftValue) =>
            !right.some((rightValue) => compareFunction(leftValue, rightValue))
    );
</script>
<style scoped>
.imagePreviewWrapper {
    width: 400px;
    height: 400px;
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

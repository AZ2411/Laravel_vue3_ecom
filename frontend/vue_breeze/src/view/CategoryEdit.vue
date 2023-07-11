<template lang="">
    <div class="flex items-center justify-center">
        <div class="px-6 py-6 lg:px-8 border-2 w-1/2 ">
                        <h3
                            class="mb-4 text-xl font-medium text-gray-900 dark:text-white"
                        >
                            Edit Category
                        </h3>
                        <form
                            class=""
                            @submit.prevent="validationUpdate(id ,category)"
                        >
                            <div>
                                <label
                                    for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Category</label
                                >
                                <input
                                    type="text"
                                    name="category"
                                    id="email"
                                    v-model="category"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                class="w-full mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Add
                            </button>
                        </form>
                    </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import { usecrudStore } from "../stores/crud";


const store = usecrudStore();
const route = useRoute();


const category = ref(null)


const id = ref(route.params.id)
onMounted(async () => {
     store.showCategory(id.value);
     
     setTimeout(() => {
        category.value = store.category.category;
     }, 2000);
});

function validationUpdate(id ,category) {
    if (category == store.category.category) {
        alert('You cannot change same category name');
    }else{
        store.updateCategory(id, category);
    }
};

</script>

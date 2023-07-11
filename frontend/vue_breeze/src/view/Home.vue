<template>
    <div class="">
        <h2>This is Home Page</h2>
        <h3>Hello World</h3>
        <img src="http://localhost:8000/images/products/1/product1.jpg" alt="image not found">
        <div v-if="!authStore.authUser">
            <p>Loading</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth"
import { initFlowbite } from "flowbite";
onMounted(async () => {
    initFlowbite();
});

const authStore = useAuthStore();
onMounted(async () => {
    await authStore.getUser();  
});
 

</script>

<style></style>

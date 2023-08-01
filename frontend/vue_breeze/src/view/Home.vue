<template>
    <div class="">
        <h2 style="font-size: 40px;" class="text-red-500">This is Home Page</h2>
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

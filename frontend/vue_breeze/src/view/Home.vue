<template>
    <div>
        <h3>This is Home Page</h3>
        <h5>{{ authStore.user?.name }}</h5>
        <h5>{{ authStore.user?.email}}</h5>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth"

const authStore = useAuthStore();
onMounted(async () => {
    await authStore.getUser(); 
});

</script>

<style></style>

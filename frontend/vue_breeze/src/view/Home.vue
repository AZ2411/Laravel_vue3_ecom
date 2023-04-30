<template>
    <div>
        
        <sideBar></sideBar>
        
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth"
import sideBar from "../components/SideBar.vue"

const authStore = useAuthStore();
onMounted(async () => {
    await authStore.getUser(); 
});
 

</script>

<style></style>

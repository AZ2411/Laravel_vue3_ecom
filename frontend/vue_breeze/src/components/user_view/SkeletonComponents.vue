<template lang="">
    <div class="xl:grid xl:grid-cols-3 xl:gap-6 mt-10">
        <div    style = "width: 350px; height: 320px"
            v-for="number in forLoops"
            class="rounded overflow-hidden shadow-lg"
        >
            <div class="box">
                <div class="img skeleton" style = "width: 160px; height: 160px; margin-top: 24px" >

                </div>
            </div>

            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text skeleton" style = "width: 200px; height: 28px; ">
                    
                </div>
                <div class="flex justify-between">
                    <div class="font-bold text-xl mb-2 text skeleton" style = "width: 150px; height: 28px; ">
                    
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const forLoops = ref([1,2,3,4,5,6]);
</script>
<style scoped>
.box{
    width: 350px;
    height: 200px;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.img {
    background-color: hsl(200, 20%, 80%);
    margin: 10px 10px 10px 10px;
    object-fit: cover;
}
.text {
    background-color: hsl(200, 20%, 80%);
}
.btn {
    background-color: hsl(200, 20%, 80%);
}
.skeleton {
    animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
    0% {
        background-color: hsl(200, 20%, 80%);
    }
    100% {
        background-color: hsl(200, 20%, 95%);
    }
}
</style>

<template lang="">
    <div class="xl:grid xl:grid-cols-2 xl:gap-3">
        <div
            v-for="number in forLoops"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl md:mt-3 sm:mt-3"
        >
            <div style="width: 192px; height: 192px" class="" >
                <div style="width: 160px; height: 160px" class="object-fill rounded-lg  md:rounded-l-lg m-5 img skeleton"></div>
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <div style="height: 28px;" class="flex mb-3">
                        <div  style="width: 100px;" class="text mr-2 skeleton rounded"></div>
                        <div style="width: 100px;" class="text mr-2 skeleton rounded"></div>

                </div>
                
                <div style="height: 72px; width: 350px;" class="mb-3 text skeleton rounded">

                </div>

                <div></div>
                <div class="flex justify-end">
                    <div style="height: 40px; width: 61px;" class="rounded-full py-2 px-4 mr-2  btn skeleton"></div>
                    <div style="height: 40px; width: 72px;" class=" rounded-full py-2 px-4 mr-2 btn skeleton"></div>
                    <div style="height: 40px; width: 80px;" class=" rounded-full py-2 px-4 btn skeleton"></div>
                    
                    
                </div>
            </div>
        </div>
        
        
        
    </div>
    
</template>
<script setup>
import { ref, onMounted } from "vue";
const forLoops = ref([1,2,3,4,])
</script>
<style scoped> 
.img{
    background-color: hsl(200, 20%, 80%);
}
.text{
    background-color: hsl(200, 20%, 80%);
}
.btn{
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

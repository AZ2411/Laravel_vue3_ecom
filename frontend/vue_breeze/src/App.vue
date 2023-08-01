<template>
    <!-- <div>
      <div v-if="auth.loadingStatus == false">
        <h2>Loading</h2>
      </div>
        <div >
            <Nav></Nav>
        </div>

        <div>
          <sideBar>
            <router-view></router-view>
          </sideBar>
            
        </div>
    </div> -->
    <ProductDetailModal class="detail-modal" />
    <div class="overflow-ellipsis">
      <NavBarNew><router-view></router-view></NavBarNew>
    </div>
</template>
<script setup>
import { ref,onMounted } from "vue";
import sideBar from "./components/SideBar.vue"
import NavBarNew from "./components/NavBarNew.vue"
import { useRoute } from 'vue-router';
import { useAuthStore } from "./stores/auth.js";
import { initFlowbite } from "flowbite";
import ProductDetailModal from "./components/user_view/ProductDetailModal.vue";
const auth = useAuthStore();
const route = useRoute()
onMounted(async () => {
  initFlowbite();
});
</script>
<style scoped>

</style>

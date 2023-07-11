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
    <div class="overflow-ellipsis">
      <NavBarNew><router-view></router-view></NavBarNew>
    </div>
</template>
<script setup>
import { ref,onMounted } from "vue";
import Nav from "./components/Navbar.vue";
import sideBar from "./components/SideBar.vue"
import NavBarNew from "./components/NavBarNew.vue"
import { useRoute } from 'vue-router';
import { useAuthStore } from "./stores/auth.js";
import { initFlowbite } from "flowbite";
const auth = useAuthStore();
const route = useRoute()
onMounted(async () => {
  initFlowbite();
});
</script>

<script setup>
import Nav from './components/Navbar.vue'

</script>

<template>
 <div>
  <div class="block">
    <Nav></Nav>
  </div>
  
  <div>
    <router-view></router-view>
  </div>
   
 </div>
</template>



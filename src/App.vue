<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Sidebar from './components/baseComponents/Sidebar.vue'
import MainSection from './components/baseComponents/Chart.vue'


</script>

<template>
  <div class="container">
    <Sidebar/>
    <div class="main-section">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
  display: flex;
  // width: 100vw;
}
.main-section {
  // width: 100%;
  margin: .5rem;
  width: 100%;
}


</style>

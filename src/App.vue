<script setup lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SideBar from './components/baseComponents/SideBar.vue'
// import MainSection from './components/baseComponents/Chart.vue'

</script>

<template>
  <main class="container">
    <SideBar />
    <section class="main-section">
      <router-view />
    </section>
  </main>
</template>

<style lang="scss" scoped>
.container{
  display: flex;
}
.main-section {
  margin: 0.5rem 1rem;
  flex: 1 1 auto;
}

</style>

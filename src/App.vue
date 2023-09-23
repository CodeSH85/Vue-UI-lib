<template>
  <main class="container">
    <SideBar />
    <section class="main-section">
      <router-view />
    </section>
    <SidePanel />
  </main>
</template>
<script setup lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SideBar from './components/Sidebar/SidebarMenu.vue'
import SidePanel from './components/SidePanel/SidePanel.vue'
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  width: 100vw;
  background-color: #f5f5f5;
}
.main-section {
  overflow: auto;
  padding: 0.5rem 1rem 0.5rem 1rem;
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
}

</style>

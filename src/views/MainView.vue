<template>
  <div class="main-view-wrapper">
    <main class="container">
      <section class="main-section">
        <ComponentView></ComponentView>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import ComponentView from './ComponentView.vue'

</script>
<style lang="scss" scoped>
.main-view-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.container{
  display: flex;
  width: 100vw;
  height: 100%;
  background-color: $surface-bright;
}
.main-section {
  overflow: auto;
  padding: $lg;
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
}
.top-bar {
  width: 100%;
  // position: fixed;
}
.main-navbar {
  position: fixed;
  left: 0;
  z-index: 2;
}
</style>

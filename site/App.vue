<template>
  <div>
    <h1>Toy UI Library</h1>
    <Navbar 
      :items="navItems"
    >
    </Navbar>
    <Button>Click me</Button>
    <Button variant="plain">Click me</Button>
    <Button variant="elevated">Click me</Button>
    <Button rounded>Click me</Button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const navItems = ref([
  {
    title: 'Button',
    key: 'button'
  }
])
</script>

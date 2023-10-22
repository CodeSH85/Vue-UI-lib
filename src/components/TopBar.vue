<template>
  <div class="root">
    <ul class="top-bar-wrapper">
      <li>Logo Here</li>
      <li>
        <TextInput
        class="search-input"
        density="compact"
        variant="outlined"
        ></TextInput>
      </li>
      <li>
        <button>
          User Info
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import TextInput from './UI/TextInput.vue'
</script>

<style lang="scss" scoped>
.root {
  background-color: $white;
}
.top-bar-wrapper {
  display: flex;
}
.search-input {
  font-size: .6rem;
}
</style>

<template>
  <div class="root">
    <ul class="top-bar-wrapper">
      <li>
        <img src="https://img.logoipsum.com/254.svg" alt="">
      </li>
      <li>
        <text-input
          class="search-input"
          density="compact"
          variant="outlined"
        >
        </text-input>
      </li>
      <li>
        <div class="">
          <img src="" alt="avatar">
        </div>
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
import TextInput from './UI/TextInput/TextInput.vue'

</script>
<style lang="scss" scoped>
.root {
  background-color: $white;
}
.top-bar-wrapper {
  padding: $sm $md;
  display: flex;
  align-items: center;
  li {
    margin: 0px $sm;
  }
}
.search-input {
  font-size: .6rem;
}
img {
  height: 24px;
}
.img-wrapper {
  height: 36px;
}
</style>

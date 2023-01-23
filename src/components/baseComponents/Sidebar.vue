<script setup lang="ts">

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const option = ref([
  {
    title: '全台綜合',
    href: '/'
  },
  {
    title: '各地區空氣狀況',
    href: '/local'
  },
  {
    title: '各地區空氣狀況',
    href: '/local'
  }
])

function navigateRoute (href:string) {
  router.push(href)
}

</script>

<template>
<nav class="sidebar">
  <ul>
    <li
    v-for="item in option" :key="item"
    class="btn-wrapper"
    >
    <button class="sidebar-btn" @click="navigateRoute(item.href)">{{ item.title }}</button>
    </li>
  </ul>
</nav>

</template>

<style lang="scss" scoped>

.sidebar {
  background: linear-gradient(#72deb5, #619ff1);
  min-height: 100vh;
  min-width: 10em;
}
.btn-wrapper {
  display: flex;
  flex-direction: column;
  width: auto;
}
* + * {
  margin-top: .4em;
}
.sidebar-btn {
  padding: 1em 0.8em;
  &:hover {
    color: white;
    background-color: darken(rgba(255, 255, 255, 0.5), 50%);
  }
}

</style>

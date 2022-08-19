<script setup>
import {ref} from "vue"

const option = ref([
  {
    title: '各地區空氣狀況',
    href: '/'
  },
  {
    title: '全台綜合',
    href: ''
  },
])

</script>

<template>
<nav class="sidebar">
  <ul>
    <li 
    class="btn-wrapper"
    v-for="item of option" :key="item" >
      <router-link 
      class="btn"
      :to="item.href"
      >
      {{item.title}}
      </router-link>
    </li>
  </ul>
</nav>

</template>

<style lang="scss" scoped>

.sidebar {
  background: linear-gradient(#72deb5, #619ff1);
  min-height: 100vh;
  width: auto;

}
.btn-wrapper {
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
}
.btn {
  padding: 1.2rem;
  min-width: 200px;
  width: 100%;
  height: auto;
  background-color: rgba(54, 54, 54, 0.3);
  color: rgb(228, 228, 228);
  cursor: pointer;
  transition: .3s;
  text-decoration: none;
  &:hover{
    background-color: rgba(168, 168, 168, .3);
    color: #fff;
  }
}
a {
}
</style>

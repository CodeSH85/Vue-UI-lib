<template>
  <div class="root">
    Msg: {{ msg }}
    <br>
    <!-- <TestComp></TestComp> -->
    <TestComp :value="msg" @updateValue="(val) => msg = val"></TestComp>
  </div>
</template>
<script setup lang="ts">

import { ref } from 'vue'
import TestComp from '../components/TestComp.vue'

const msg = ref<string>('Msg form parent')
console.log(msg.value)

</script>

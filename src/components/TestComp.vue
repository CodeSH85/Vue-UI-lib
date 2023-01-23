<template>
  <h2>{{ name }}</h2>
</template>

<script setup lang="ts">

import { toRefs } from 'vue'

interface Props {
  name: string
}

const props = defineProps<Props>()

const { name } = toRefs(props)

</script>

<style lang="scss" scoped>

</style>

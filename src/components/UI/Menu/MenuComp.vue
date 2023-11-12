<template>
  <div class="menu">
    <button-comp
      :ref="el => functionRef(el)"
      @click="toggleShow"
    >
      {{ items[0].title }}
    </button-comp>
    <ul
      class="menu-item-list"
      v-show="showItems"
      :style="{
        left: displayOptions.x + 'px',
        top: displayOptions.y + 'px'
      }"
    >
      <li
        v-for="item in items" :key="item.key"
        @click="itemClick(item)"
      >
        <button>
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import ButtonComp from '../Button/ButtonComp.vue'

interface MenuItem {
  key: string | number
  value: unknown
  title?: string
  [prop: string]: unknown
}
interface Props {
  items: MenuItem[]
  modelValue: string
}

defineOptions({
  name: 'MenuComp'
})
defineProps<Props>()

const showItems = ref(false)

const emits = defineEmits(['update:modelValue'])

const itemClick = (item: MenuItem) => {
  showItems.value = false
  emits('update:modelValue', item.value)
}

const menu = ref()

function functionRef (el) {
  menu.value = el
}

const displayOptions = ref(
  {
    x: 0,
    y: 0
  }
)

const toggleShow = () => {
  console.log(menu.value)
  showItems.value = !showItems.value
  // displayOptions.value.x = menu.value.getBoundingClientRect().right
  // displayOptions.value.y = menu.value.getBoundingClientRect().top
}

</script>
<style lang="scss" scoped>
.menu {
  position: relative;
}
.menu-item-list {
  position: absolute;
}
</style>

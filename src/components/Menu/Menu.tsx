import { defineComponent, ref, computed } from 'vue'
import classes from './menu.module.scss'
import { MenuProps } from './props'
import { onKeyStroke } from '@vueuse/core'

import Popper from '../Popper/Popper'
import Button from '../Button/Button'

export default defineComponent({
  name: 'MenuComp',
  props: MenuProps,
  emits: ['update:modelValue'],
  setup (props, { slots, emit }) {

    const contentRef = ref<HTMLElement | null>(null)
    const itemRefs= ref<HTMLElement[]>([])
    const targetEle = computed(() => {
      return itemRefs.value[currentDataIdx.value]
    })
    function getItemRefs(el: HTMLElement) {
      contentRef.value = el
      if (contentRef.value) itemRefs.value = Array.from(contentRef.value.children)
    }
    const currentDataIdx = ref(-1)
    onKeyStroke('ArrowUp', (e) => {
      e.preventDefault()
      currentDataIdx.value <= 0
        ? currentDataIdx.value = props.items.length - 1
        : currentDataIdx.value -= 1
      if (targetEle.value) targetEle.value.scrollIntoView(false)
    })
    onKeyStroke('ArrowDown', (e) => {
      e.preventDefault()
      currentDataIdx.value === props.items.length - 1
        ? currentDataIdx.value = 0
        : currentDataIdx.value += 1
      if (targetEle.value) targetEle.value.scrollIntoView(false)
    })
    onKeyStroke('Enter', () => {
      emit('update:modelValue', props.items[currentDataIdx.value])
      currentDataIdx.value = 0
      if (targetEle.value) targetEle.value.scrollIntoView(false)
    })
    function clickItem<T>(item: T) {
      emit('update:modelValue', item)
    }
    const defaultContent = () => {
      return (
        <div
          ref={ el => getItemRefs(el) }
          class={classes['--menu-content-container']}
        >
          {
            props.items.length && props.items.map((item, idx) => (
              slots.item
              ? slots.item({ item })
              : <div
                  class={[
                    classes['--menu-content-item'],
                    classes[
                      currentDataIdx.value === idx
                        ? '--menu-content-item-current'
                        : '--menu-content-item-default'
                    ]
                  ]}
                  onClick={() => clickItem(item)}
                  
                >
                  { 
                    typeof item === 'string' 
                      ? item
                      : item.title
                  }
                </div>
            ))
          }
        </div>
      )
    }
    return () => (
      <Popper>
        {
          {
            trigger: ({ toggleContent }) => (
              slots.trigger
              ? slots.trigger({ click: toggleContent })
              : 
                <Button
                  onClick={ 
                    toggleContent
                  }
                >
                  Menu
                </Button>
            ),
            default: () => (
              slots.default
                ? slots.default()
                : defaultContent()
            )
          }
        }
      </Popper>
    )
  }
})

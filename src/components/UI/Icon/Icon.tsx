import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IconComp',
  setup(props, { slots }) {
    return () => (
      slots.default
        ? <i class={ 'mdi ' + slots.default()[0].children }></i>
        : null
    )
  }  
})

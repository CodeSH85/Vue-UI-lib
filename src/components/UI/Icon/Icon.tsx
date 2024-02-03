import { defineComponent, ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'

export default defineComponent({
  name: 'IconComp',
  setup(props, { slots }) {
    const iconPath = ref();

    import('@mdi/js')
      .then(mdi => {
        if (slots.default) {
          console.log(mdi['mdi' +slots.default()[0].children])
          iconPath.value = mdi['mdi' + slots.default()[0].children]
        }
      })
      .catch(error => {
        console.error('Error loading icon:', error)
      })

    return () => (
      <SvgIcon
        type={ 'mdi' }
        path={ iconPath.value }
      >
      </SvgIcon>
    )
  }  
})

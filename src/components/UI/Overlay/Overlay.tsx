import { defineComponent } from 'vue'
import './overlay.scss'

const Overlay = defineComponent({
  name: 'OverlayComp',
  props: {},
  emits: [],
  setup (props, { slots }) {
    return () => (
      <>
        <div class="wrapper">
          { slots.default?.() }
        </div>
      </>
    )
  }
})

export default Overlay

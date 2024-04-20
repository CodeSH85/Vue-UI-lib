import { defineComponent } from 'vue'

interface Props {
  type: ['alert']
}

const AlertComp = defineComponent({
  name: 'AlertComp',
  setup(props) {
    return (
      <div>
        Alert
        {
          props.type === 'test' ?? <span>test</span>
        }
      </div>
    )
  }
})

export default AlertComp

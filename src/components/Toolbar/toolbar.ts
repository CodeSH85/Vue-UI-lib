import { PropType } from 'vue'

type dataTypeList = 'number' | 'text' | 'checkbox' | 'switch' | 'select' | 'range'

type toolOption = {
  title: string
  key: string
  dataType?: dataTypeList
  icon?: string
}

export const toolbarProps = {
  toolOptions: {
    type: Array as PropType<toolOption[]>,
    required: true
  }
}

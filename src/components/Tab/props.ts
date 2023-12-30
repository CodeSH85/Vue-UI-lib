import { PropType } from 'vue'

export interface Tab {
  id: number;
  title: string;
  key: number | string;
  isSave?: boolean;
  componentName: string;
}

export type TabItem = {
  key: string,
  [items: string]: unknown
}

export const TabsProps = {
  modelValue: {
    type: String
  },
  tabs: {
    type: Array as PropType<TabItem[]>
  },
  vertical: {
    type: Boolean,
    default: false
  }
}

export const TabProps = {
  value: {
    type: String,
    required: true
  }
}

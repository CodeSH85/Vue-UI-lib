import { PropType } from 'vue'

export type ListItem = {
  title: string
}

export const ListProps = {
  tag: {
    type: String,
    default: 'div'
  },
  items: {
    type: Array as PropType<ListItem[]>
  }
} as const

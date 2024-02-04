interface SidebarOption {
  id: number | string
  title: string
  key: string
  icon?: string
  componentName?: string | number
  subModule?: SidebarOption[]
}

export type { SidebarOption }

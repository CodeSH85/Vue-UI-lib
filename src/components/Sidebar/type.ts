interface SidebarOption {
  main_module: {
    icon: string
    title: string
    key: string
  }[],
  side_module: {
    icon: string
    title: string
    key: string
  }[]
}

export type { SidebarOption }

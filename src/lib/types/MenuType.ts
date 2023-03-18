export type IMenuItem = {
  cssClasses: string[]
  id: string,
  label: string
  order: number
  parentId: string | null
  path: string
  title: string | null
  uri: string
}

export type IMenu = {
  count: number
  name: string
  slug: string
  id: string
  menuItems: {
    nodes: IMenuItem[]
  }
}

export type IMenus = {
  menus: {
    nodes: IMenu[]
  }
}

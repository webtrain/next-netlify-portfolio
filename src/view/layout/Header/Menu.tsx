'use client'

import React from 'react'
import { IMenu } from '../../../lib/types/MenuType'
import MenuItem from './MenuItem'

function Menu({ menu }: { menu: IMenu }) {
  return (
    <ul className="flex justify-end gap-x-2">
      {menu.menuItems.nodes.map(menuItem => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
    </ul>
  )
}

export default Menu

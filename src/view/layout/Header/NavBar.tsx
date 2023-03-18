import React from 'react'
import { IMenu } from '../../../lib/types/MenuType';

function NavBar({ menu }: { menu: IMenu }) {
  return (
    <nav>
      <ul>
        {menu.menuItems.nodes.map(menuItem => <li>{menuItem.label}</li>)}
      </ul>
    </nav>
  )
}

export default NavBar;

import React from 'react'
import { IMenu } from '../../../lib/types/MenuType'
import NavBar from './NavBar'

function Header({ menu }: { menu: IMenu }) {
  return (
    <header>
      <NavBar menu={menu} />
    </header>
  )
}

export default Header

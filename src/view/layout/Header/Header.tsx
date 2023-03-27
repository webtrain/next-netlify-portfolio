import React from 'react'
import { IMenu } from '../../../lib/types/MenuType'
import NavBar from './NavBar'

function Header({ menu }: { menu: IMenu }) {
  return (
    <header className="flex justify-center px-4 py-2">
      <NavBar menu={menu} />
    </header>
  )
}

export default Header

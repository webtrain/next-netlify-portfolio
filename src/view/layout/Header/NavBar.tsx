'use client'

import React from 'react'
import { IMenu } from '../../../lib/types/MenuType';
import Logo from './Logo';
import Menu from './Menu';

function NavBar({ menu }: { menu: IMenu }) {
  return (
    <nav className="flex justify-between">
      <Logo />
      <Menu menu={menu} />
    </nav>
  )
}

export default NavBar;

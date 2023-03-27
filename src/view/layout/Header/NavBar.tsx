import React from 'react'
import { IMenu } from '../../../lib/types/MenuType';
import Logo from './Logo';
import Menu from './Menu';
import ThemeSwitcher from './ThemeSwitcher';

function NavBar({ menu }: { menu: IMenu }) {
  return (
    <nav className="flex justify-between w-full max-w-screen-wideScreen">
      <Logo />
      <div className="flex gap-2">
        <ThemeSwitcher />
        <Menu menu={menu} />
      </div>
    </nav>
  )
}

export default NavBar;

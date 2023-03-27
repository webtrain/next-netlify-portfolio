'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { BsSun } from 'react-icons/bs'
import { FiMoon } from 'react-icons/fi'

function ThemeSwitcher() {
  const { theme, systemTheme, setTheme } = useTheme()

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className="pt-1">
      <button
        type="button"
        onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      >
        {currentTheme === 'dark' ? <BsSun /> : <FiMoon />}
      </button>
    </div>
  )
}

export default ThemeSwitcher

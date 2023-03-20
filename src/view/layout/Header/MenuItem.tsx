'use client'

import React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { IMenuItem } from '../../../lib/types/MenuType'

function MenuItem({ label, uri }: Partial<IMenuItem>) {
  const activeSegment = useSelectedLayoutSegment()
  const active = `/${activeSegment}/` === uri
  const path = uri.slice(0, uri.length - 1)

  return (
    <li className={active ? 'active' : ''}>
      <Link href={path}>{label}</Link>
    </li>
  )
}

export default MenuItem

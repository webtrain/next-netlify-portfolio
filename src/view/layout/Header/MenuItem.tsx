'use client'

import React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { IMenuItem } from '../../../lib/types/MenuType'

function MenuItem({ label, uri }: Partial<IMenuItem>) {
  const activeSegment = useSelectedLayoutSegment()
  const active = `/${activeSegment}/` === uri

  return (
    <li className={active ? 'active' : ''}>
      <Link href={uri}>{label}</Link>
    </li>
  )
}

export default MenuItem

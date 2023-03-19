import React from 'react'
import Link from 'next/link'
import { IMenuItem } from '../../../lib/types/MenuType'

function MenuItem({ label, uri }: Partial<IMenuItem>) {
  return (
    <li>
      <Link href={uri}>
        {label}
      </Link>
    </li>
  )
}

export default MenuItem

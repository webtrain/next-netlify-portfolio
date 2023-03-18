import { gql } from 'graphql-request'
import React from 'react'
import client from '../lib/grafbase'
import { IMenus } from '../lib/types/MenuType'
import '../styles/globals.css'
import Header from '../view/layout/Header/Header'

async function getLayoutData() {
  const layoutQuery = gql`
    query LayoutQuery {
      menus {
        nodes {
          count
          name
          slug
          id
          menuItems {
            nodes {
              cssClasses
              id
              label
              order
              parentId
              path
              title
              uri
            }
          }
        }
      }
    }
  `

  const result = await client.request<IMenus>(layoutQuery)
  return result.menus
}

type IRootLayout = { children: React.ReactNode }

const RootLayout = async ({ children }: IRootLayout) => {
  const layoutData = await getLayoutData()

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [footerMenu, topMenu] = layoutData.nodes

  return (
    <html lang="en">
      <head>
        <title>Portfolio Page</title>
        <meta
          name="description"
          content="My first Portfolio page with nextJs"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header menu={topMenu} />
        {children}
      </body>
    </html>
  )
}

export default RootLayout

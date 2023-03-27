import React from 'react'
import { gql } from 'graphql-request'
import client from '../lib/grafbase'
import { IMenus } from '../lib/types/MenuType'
import '../styles/globals.css'
import Header from '../view/layout/Header/Header'
import Providers from './Providers'
import Footer from '../view/layout/Footer/Footer'

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
        <Providers>
          <Header menu={topMenu} />
          <main className="flex flex-col items-center">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout

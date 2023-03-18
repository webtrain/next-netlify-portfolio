import React from 'react'
import { gql } from 'graphql-request'
import client from '../lib/grafbase'
import HomePage from './home-page'
import { IPosts } from '../lib/types/PostsType'

async function getAllPosts() {
  const postsQuery = gql`
    query GetAllPosts {
      posts {
        nodes {
          excerpt
          featuredImage {
            node {
              link
              sourceUrl
              title
              id
            }
          }
          link
          slug
          status
          id
          title
          date
          author {
            node {
              avatar {
                url
              }
              id
              username
            }
          }
        }
      }
    }
  `

  const result = await client.request<IPosts>(postsQuery)
  return result?.posts?.nodes || [];
}

const Page = async () => {
  const posts = await getAllPosts()

  return <HomePage posts={posts} />
}

export default Page

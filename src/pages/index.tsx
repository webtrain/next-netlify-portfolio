import React from 'react'
import Head from 'next/head'
import { gql } from '@apollo/client';
import Header from '../view/layout/Header';
import Footer from '../view/layout/Footer';
import { initializeApollo } from '../lib/qraphql/apollo';
import Posts from '../view/components/Posts/Posts';
import { Post } from '../lib/types/types';

const client = initializeApollo();



type HomePegeProps = {
  loading: boolean,
  posts: Post[]
}

export default function Home({ loading, posts }: HomePegeProps) {
  if (loading) return <h2>Loading...</h2>

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <Posts posts={posts} />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const GET_ALL_POSTS = gql`
    query GetPosts {
      posts {
        nodes {
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          date
          categories {
            nodes {
              slug
            }
          }
          title
          uri
          postId
        }
      }
    }
  `
  const { loading, data } = await client.query({ query: GET_ALL_POSTS });

  return {
    props: {
      loading,
      posts: data.posts.nodes || [],
    },
  };
}

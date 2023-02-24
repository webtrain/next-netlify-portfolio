import React from 'react'
import Head from 'next/head'
import { gql } from '@apollo/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { initializeApollo } from '../lib/qraphql/apollo';

const client = initializeApollo();

export default function Home({ loading, posts }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <h3>Hello Portfolio!</h3>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const GET_ALL_POSTS = gql`
    query GetPosts {
      posts {
        nodes {
          author {
            node {
              id
            }
          }
          date
          title
          uri
          postId
        }
      }
    }
  `;
  const { loading, data } = await client.query({ query: GET_ALL_POSTS });

  return {
    props: {
      loading,
      posts: data.posts.nodes || [],
    },
  };
}

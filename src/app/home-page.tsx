'use client'

import React from 'react'
import { IPost } from '../lib/types/PostsType'
import Posts from '../view/components/Posts/Posts'

function HomePage({ posts }: { posts: IPost[] }) {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold underline">Portfolio Page</h1>
      <Posts posts={posts} />
    </main>
  )
}

export default HomePage

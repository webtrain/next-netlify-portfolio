'use client'

import React from 'react'
import { IPost } from '../lib/types/PostsType'
import Posts from '../view/components/Posts/Posts'

function HomePage({ posts }: { posts: IPost[] }) {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-screen-wideScreen">
      <h1 className="text-3xl font-bold underline">Portfolio Page</h1>
      <Posts posts={posts} />
    </div>
  )
}

export default HomePage

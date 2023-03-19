import React from 'react'
import { IPost } from '../../../lib/types/PostsType'
import Post from './Post'

function Posts({ posts }: { posts: IPost[] }) {
  return (
    <>
      <h3>Posts</h3>
      <ul className="grid grid-cols-4 gap-4">
        {posts.map(post => <Post key={post.id} {...post} />)}
      </ul>
    </>
  )
}

export default Posts

import React from 'react'
import { IPost } from '../../../lib/types/PostsType'
import style from './Posts.module.css'

function Posts({ posts }: { posts: IPost[] }) {
  return (
    <>
      <h3>Posts</h3>
      <ul className="grid grid-cols-4 gap-4">
        {posts.map(post => (
          <li className="post" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts

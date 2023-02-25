import React from 'react'
import { Posts as PostsProps } from '../../../lib/types/types'
import style from './Posts.module.css'

function Posts({ posts }: PostsProps) {
  return (
    <>
      <h3>Posts</h3>
      <ul className={style.posts}>
        {posts.map((post) => (
          <li className="post" key={post.postId}>
            <h4>{post.title}</h4>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts

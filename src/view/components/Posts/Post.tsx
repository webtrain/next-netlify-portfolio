import React from 'react'
import { IPost } from '../../../lib/types/PostsType'

function Post({ id, title, date }: Partial<IPost>) {
  return (
    <li className="post" key={id}>
      <h4>{title}</h4>
      <small>{date}</small>
    </li>
  )
}

export default Post

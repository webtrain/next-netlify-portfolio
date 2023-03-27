import React from 'react'
import { IPost } from '../../../lib/types/PostsType'

function Post({ id, title, date }: Partial<IPost>) {
  return (
    <li key={id} className="post prose dark:prose-invert">
      <h4>{title}</h4>
      <small>{date}</small>
    </li>
  )
}

export default Post

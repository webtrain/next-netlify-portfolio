export type Post = {
  __typename: string
  author: {
    __typename: string
    node: {
      __typename: string
      name: string
      avatar: {
        __typename: string
        url: string
      }
    }
  }
  date: string
  categories: {
    __typename: string
    nodes: [
      {
        __typename: string
        slug: string
      }
    ]
  }
  title: string
  uri: string
  postId: number
}

export type Posts = {
  posts: Post[]
}
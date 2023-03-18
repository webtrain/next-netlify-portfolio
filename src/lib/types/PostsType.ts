export type IAuthor = {
  node: {
    avatar: {
      url: string | null
      id: string,
      username: string | null
    }
  }
}

export type IPost = {
  excerpt: string
  featuredImage: null
  link: string
  slug: string
  status: 'publish'
  id: 'cG9zdDoxNzgy'
  title: 'Block category: Widgets'
  author: IAuthor
  date: string
}

export type IPosts = {
  posts: {
    nodes: IPost[]
  }
}

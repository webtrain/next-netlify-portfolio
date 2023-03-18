import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_BASE_API_URI}/graphql` as string, {
  headers: {},
})

export default client

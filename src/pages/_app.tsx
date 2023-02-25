import React from 'react'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'

import { useApollo } from '../lib/qraphql/apollo'

function Application({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default Application

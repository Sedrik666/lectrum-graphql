//Core
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'

//Other
import { client } from './init/client'

export const App = () => {
  return(
    <ApolloProvider client={client}>
      <>
        <p>Welcome</p>
      </>
    </ApolloProvider>
  )
};

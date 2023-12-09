import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/services';
import Routes from './src/routes';


function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;

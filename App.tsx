import 'react-native-gesture-handler'
import './src/i18n'

import * as React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/services';
import Routes from './src/routes';
import { UserProvider } from './src/store/userContext';


function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ApolloProvider>
  );
}

export default App;

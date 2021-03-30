import React from 'react';
import './App.css';
import Header from '../src/Header';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

import Questions from './components/questions';
import  TinderCards  from '../src/TinderCards';
import SwipeButtons from "../src/SwipeButtons";

const client = new ApolloClient({
  uri:  '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
    </ApolloProvider>
  );
}

export default App;

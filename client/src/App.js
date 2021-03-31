import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import Header from '../src/Header';
import MultistepForm from './components/MultistepForm';
// import { ApolloProvider } from '@apollo/react-hooks';
// import ApolloClient from "apollo-boost";

// import Questions from './components/questions';
import  TinderCards  from '../src/TinderCards';
import SwipeButtons from "../src/SwipeButtons";

// const client = new ApolloClient({
//   uri:  '/graphql'
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    <div className="app">
      
      <Header />
      <Route path = "/" component={MultistepForm} />
      <TinderCards />
      <SwipeButtons />
    </div>
    // </ApolloProvider>
  );
}

export default App;

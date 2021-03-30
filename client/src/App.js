<<<<<<< HEAD:project-folder/client/src/App.js
import React from 'react';
=======
import React from "react";
>>>>>>> b6059bf32517d27d3253f2623839f98ea4b04889:client/src/App.js
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
<<<<<<< HEAD:project-folder/client/src/App.js
    <ApolloProvider client={client}>
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
=======
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> b6059bf32517d27d3253f2623839f98ea4b04889:client/src/App.js
    </div>
    </ApolloProvider>
  );
}

export default App;

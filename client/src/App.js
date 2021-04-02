import React from 'react';
import {Route} from 'react-router-dom';
import Questionnaire from "./pages/Questionnaire"
import {Container} from "react-bootstrap"
import NavBar from "./components/NavBar";

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
      

      <NavBar />
        <Container> 
          
      <Route path = "/" exact component ={MultistepForm} />
      <Route path = "/Questionnaire" component = {Questionnaire} />
      <TinderCards />
      <SwipeButtons />
              

        
        </Container>
    </div>
    // </ApolloProvider>
  );
}

export default App;

<<<<<<< HEAD
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
=======
import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
// import Map from "./pages/Map"
import Matches from "./pages/Matches"
import MyLikes from "./pages/MyLikes"
// import NewMembers from "./pages/NewMembers"
import Questionnaire from "./pages/Register"
import { Container } from "react-bootstrap"
import Register from "./pages/Questionnaire";
import MyProfile from "./pages/MyProfile.js";
import LogIn from "./pages/LogIn.js";
function App() {
  return (
    <div >
      <NavBar />
      <Container>
        text
        <Router>
          <Route exact path="/" component={Home} />
          {/* <Route exact path = "/Map" component = {Map} /> */}
          <Route exact path="/MyProfile" component={MyProfile} />
          <Route exact path="/Matches" component={Matches} />
          <Route exact path="/MyLikes" component={MyLikes} />
          {/* <Route exact path = "/NewMembers" component = {NewMembers} /> */}
          <Route exact path="/Questionnaire" component={Questionnaire} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/LogIn" component={LogIn} />
        </Router>
      </Container>
>>>>>>> 4020ac79975f7dd64cb48c8d465516f7b106ea95
    </div>
    // </ApolloProvider>
  );
}
export default App;
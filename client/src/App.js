import React from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
// import Map from "./pages/Map"
import Chat from "./pages/Chat"
import MyLikes from "./pages/MyLikes"
// import NewMembers from "./pages/NewMembers"
import Questionnaire from "./components/Register"
import { Container } from "react-bootstrap"
import Register from "./pages/Questionnaire";
import MyProfile from "./pages/MyProfile.js";
import Matches from "./pages/Matches"
import LogIn from "./pages/LogIn.js";
import LikeProfile from "./pages/LikeProfile";
import Upgrade from "./components/Upgrade.js";
function App() {
  const client = new ApolloClient({
    request: (operation) => {
      const token = localStorage.getItem('id_token')
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      })
    },
    uri: '/graphql',
  })
  return (
    <div >
      <ApolloProvider client={client}>
        <NavBar />
          <Container>
            
          <Router>
            <Route exact path="/" component={Home} />
            {/* <Route exact path = "/Map" component = {Map} /> */}
            <Route exact path="/MyProfile" component={MyProfile} />
            <Route exact path="/Chat" component={Chat} />
            <Route exact path="/Matches" component={Matches} />
            <Route exact path="/MyLikes" component={MyLikes} />
            <Route exact path="/LikeProfile" component={LikeProfile} />
            {/* <Route exact path = "/NewMembers" component = {NewMembers} /> */}
            <Route exact path="/Questionnaire" component={Questionnaire} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/LogIn" component={LogIn} />
          </Router>
        </Container>
      </ApolloProvider>
    </div>
  );
}
export default App;
import React from "react";
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home"
// import Map from "./pages/Map"
import Matches from "./pages/Matches"
import MyLikes from "./pages/MyLikes"
// import NewMembers from "./pages/NewMembers"
import Questionnaire from "./pages/Questionnaire"
import {Container} from "react-bootstrap"
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile.js";
import LogIn from "./pages/LogIn.js";
function App() {
  return (
    <div >
        <NavBar />
        <Container> 
          text
        <Router>
              <Route exact path = "/" component = {Home} />
              {/* <Route exact path = "/Map" component = {Map} /> */}
              <Route exact path = "/MyProfile" component = {MyProfile} />
              <Route exact path = "/Matches" component = {Matches} />
              <Route exact path = "/MyLikes" component = {MyLikes} />
              {/* <Route exact path = "/NewMembers" component = {NewMembers} /> */}
              <Route exact path = "/Questionnaire" component = {Questionnaire} />
               <Route exact path = "/Register" component = {Register} />
                <Route exact path = "/LogIn" component = {LogIn} />
       
        </Router>
        </Container>
    </div>
  );
}
export default App;
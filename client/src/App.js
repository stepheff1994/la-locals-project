import React from "react";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './pages/Chat'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="container"> 
      <Router>
        <Switch>
            <Route exact path="/Chat" component={Chat} />
        </Switch>        
      </Router>

      </div>

      </header>
    </div>
  );
}

export default App;

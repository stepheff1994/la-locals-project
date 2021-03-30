import React from 'react';
import './App.css';
import Header from '../src/Header';
import  TinderCards  from '../src/TinderCards';
import SwipeButtons from "../src/SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import "./App.css"
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Home from "./PortfolioContainer/Home/Home"
import Resume from './PortfolioContainer/Resume/Resume';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <AboutMe/>
        <Resume/>
      </div>
    );
  }
}

export default App;

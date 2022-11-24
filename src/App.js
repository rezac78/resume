import React, { Component } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import ContantMe from "./PortfolioContainer/ContactMe/ContantMe";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <AboutMe />
        <Resume/>
        <ContantMe/>
      </div>
    );
  }
}

export default App;

// Accepting components from other files to be rendered
import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import SectionMain from "./SectionMain";
import Aside from "./Aside";
import Footer from "./Footer";

class App extends Component {
  // Creates a class component called App
  render() {
    return (
      // Start of the return function of what is in our App
      <div className="App">
        {/* Place all 4 components that were made in order to be rendered*/}
        <Header backColor="green" width="50%"></Header>{" "}
        {/* Header accepts props values */}
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App; // sends entire app out to be recieved by index.js

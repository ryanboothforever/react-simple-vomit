// Imports components from React & other files
import React, { Component } from "react";
import "./Header.css";

// Creates a class component called "Header"
class Header extends Component {
  render() {
    // Makes a style component for the Header that allows props to be passed in for the values
    const style = {
      width: this.props.width,
      backgroundColor: this.props.backColor,
    };
    // Returns a header with a style prop
    return <header style={style} className="Header-main"></header>;
  }
}

// Export file to be imported elsewhere (app.js)
export default Header;

//document.querySelector("header").style.backgroundColor = "red"

import React, { Component } from "react";
import logo from "./logo.svg";
import logo1 from "./logo1.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo1" alt="logo1" />
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="blue-text">Mock Netflix</h1>
          <p></p>
          <a
            className="App-link"
            href="https://www.netflix.com/browse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Head to Real Netflix
          </a>
        </header>
      </div>
    );
  }
}
export default App;

import React from "react";
import Hello from "./Hello.js";
import logo from "../logo.svg";

const Main = (props) => {
  console.log("props : " + JSON.stringify(props));
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Hello name={props.name} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};

export default Main;

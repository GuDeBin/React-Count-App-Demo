import React from "react";
import logo from "./logo.svg";
import "./Hello.css";

import { Counter } from "../counter/Counter";

export const HelloWorld = () => {
  return (
    <section className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <Counter />
        <p>仿Redux计数器项目</p>
        <span>
          <span>Learn</span>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          <span> and </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Toolkit
          </a>
        </span>
      </header>
    </section>
  );
};

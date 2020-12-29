import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
const name = "fatih";
const year = 2020;

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>This is practice</h1>
      <p>Created by {name}</p>
      <p> mdksjdkjsdjskd {year}</p>
    </div>
    <App />
  </React.StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { HelloWorld } from "./page/index/Hello";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelloWorld />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

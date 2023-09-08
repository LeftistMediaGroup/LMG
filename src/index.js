import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { allContext } from "./contexts.js";

const [context, setContext] = useState({allData: {}});

ReactDOM.render(
  <BrowserRouter>
      <allContext.Provider value={[context, setContext]}>
      <App />
      </allContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

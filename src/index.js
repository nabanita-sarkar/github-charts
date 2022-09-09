import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import User from "./pages/User";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Switch, Route } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/user" component={User} />
      </Switch>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

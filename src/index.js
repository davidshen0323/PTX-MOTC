import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import homepage from "./components/Homepage";
import scenicspot from "./components/Scenicspot";
import scenicspotcity from "./components/Scenicspotcity";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/homepage" component={homepage} />
      <Route exact path="/scenicSpot" component={scenicspot} />
      <Route exact path="/scenicSpot/:city" component={scenicspotcity} />
      <Route path="/" component={homepage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

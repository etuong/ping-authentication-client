import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import config from "./config";
import Home from "./components/home";

render(
  <BrowserRouter>
    <Switch>
      <Route render={(routeProps) => <Home {...routeProps} {...config} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

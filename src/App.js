import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";
import Team from "./components/Team";


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

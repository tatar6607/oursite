import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Body from "./components/Body";
import Header from "./components/Header";
import Login from "./components/Login";


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
      </Switch>
    </Router>
  );
}

export default App;

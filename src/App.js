import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Body />
        </Route>
        <Route exact path="/login">
          <Body />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

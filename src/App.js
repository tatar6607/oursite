import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import FooterMenu from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <FooterMenu />
    </Router>
  );
}

export default App;

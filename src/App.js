import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { MessagesProvider } from "./contexts/MessagesContext";
import { TeamProvider } from "./contexts/TeamContext";
import { BodyCardDataProvider } from "./contexts/BodyCardData";
import { ClientsProvider } from "./contexts/ClientsContext";

import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import FooterMenu from "./components/Footer";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <MessagesProvider>
        <TeamProvider>
          <BodyCardDataProvider>
            <ClientsProvider>
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
                  <Route exact path="/messages">
                    <Messages />
                  </Route>
                  <Route exact path="/profile">
                    <Profile />
                  </Route>
                </Switch>
                <FooterMenu />
              </Router>
            </ClientsProvider>
          </BodyCardDataProvider>
        </TeamProvider>
      </MessagesProvider>
    </AuthProvider>
  );
}

export default App;

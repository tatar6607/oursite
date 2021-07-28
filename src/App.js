import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { MessagesProvider } from "./contexts/MessagesContext";
import { ChatProvider } from "./contexts/ChatContext";
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
      <ChatProvider>
        <TeamProvider>
          <BodyCardDataProvider>
            <ClientsProvider>
              <Router>
                <Header />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/team">
                    <Team />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/messages">
                    <Messages />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                </Switch>
                <FooterMenu />
              </Router>
            </ClientsProvider>
          </BodyCardDataProvider>
        </TeamProvider>
        </ChatProvider>
      </MessagesProvider>
    </AuthProvider>
  );
}

export default App;

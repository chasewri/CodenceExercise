import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/nav/Nav";
import HomePage from "./pages/home/homePage";
import SignIn from "./pages/signIn/signIn";
import Upload from "./pages/upload/upload";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <section>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/upload">
              <Upload />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;

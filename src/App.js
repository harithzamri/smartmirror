import React from "react";
import NavBarContainer from "./container/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutContainer from "./pages/about";

function App() {
  return (
    <Router>
      <NavBarContainer />
      <Switch>
        <Route exact path="/about" component={AboutContainer} />
      </Switch>
    </Router>
  );
}

export default App;

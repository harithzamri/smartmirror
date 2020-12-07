import React from "react";
import NavBarContainer from "./container/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NavBarContainer} />
      </Switch>
    </Router>
  );
}

export default App;

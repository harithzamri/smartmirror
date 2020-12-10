import React from "react";
import NavBarContainer from "./container/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Products from "./pages/products";

function App() {
  return (
    <Router>
      <NavBarContainer />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Calculators from "./components/Calculators";
import About from "./components/About";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route path="/" exact component={Calculators}></Route>
          <Route path="/about" exact component={About}></Route>
        </Router>
      </div>
    );
  }
}

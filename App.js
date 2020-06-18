import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import learnMore from "./Components/learnMore";
import checkup from "./Components/checkup";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/learnMore" component={learnMore} />
          <Route exact path="/checkup" component={checkup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

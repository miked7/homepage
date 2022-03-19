import "./App.css";
import { React, Link } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomeDesktopHD from "./components/HomeDesktopHD";

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <HomeDesktopHD />
          </Route>
          <Route exact path="/homepage">
            <HomeDesktopHD />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
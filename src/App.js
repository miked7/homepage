import "./App.css";
import { React, Link } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomeDesktopHD from "./components/HomeDesktopHD";

function App() {
  return (
    <div>
      <HomeDesktopHD />
    </div>
  );
}

export default App;
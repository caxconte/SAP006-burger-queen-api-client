import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "semantic-ui-css/semantic.min.css";
import "./index.css";



ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

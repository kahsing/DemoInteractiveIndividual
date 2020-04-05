import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ReactionPage from "./components/Reaction";
import ScreenPage from "./components/Screen";
import { ToastProvider } from "react-toast-notifications";

import "./App.css";

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  backgroundColor: "white"
};

const MyCustomToast = ({ appearance, children }) => <div>{children}</div>;

const App = () => {
  return (
    <div style={divStyle} className="disable-dbl-tap-zoom">
      <ToastProvider
        placement={"bottom-left"}
        components={{ Toast: MyCustomToast }}
      >
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Reaction">Reaction</Link>
              </li>
              <li>
                <Link to="/Screen">Screen</Link>
              </li>
            </ul>
          </nav>
          <Route exact path={"/Reaction"} component={ReactionPage} />
          <Route exact path={"/Screen"} component={ScreenPage} />
        </Router>
      </ToastProvider>
    </div>
  );
};

export default App;

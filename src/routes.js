import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";
import Home from "./containers/Home";
import Explore from "./containers/Explore";
import Notifications from "./containers/Notifications";
import NavBar from "./components/NavBar";

const routes = (
  <Router>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route path="/">
      <NavBar />
    </Route>
    <Route path="/home" component={Home} />
    <Route path="/explore" component={Explore} />
    <Route path="/notifications" component={Notifications} />
  </Router>
);

export default routes;

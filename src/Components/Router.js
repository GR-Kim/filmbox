import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home";
import Search from "../Routes/Search";
import Tv from "../Routes/Tv";

const router = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={Tv} />
      <Route path="/tv/popular" render={ () =><h1> Popular </h1> } />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default router;

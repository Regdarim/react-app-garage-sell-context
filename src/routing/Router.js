import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import AboutProject from "../views/AboutProject/AboutProject";
import Contact from "../views/Contact/Contact";
import { routes } from "../routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.aboutProject} component={AboutProject} />
        <Route path={routes.contact} component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

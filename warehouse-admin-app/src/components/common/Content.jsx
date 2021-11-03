import * as React from "react";
import * as PropTypes from "prop-types";

import { Switch, Route } from "react-router-dom";

import Profile from '../profile/Profile';

export const Content = (props) => {
  return (
    <div className="content-wrapper">
      <Switch>
        <Route exact={true} path="/#">
          <Profile></Profile>
        </Route>
        <Route exact={true} path="#/create-container">
          <Profile></Profile>
        </Route>
        <Route exact={true} path="/admin-container">
          <Profile></Profile>
        </Route>
        <Route exact={true} path="/admin-categories-container">
          <Profile></Profile>
        </Route>
        {/*<Route exact={true} path="/edit-company/:idCompany">
          <EditCompany></EditCompany>
        </Route>
        <Route exact={true} path="/admin-company">
          <Companies></Companies>
        </Route>
        <Route exact={true} path="/admin-application">
          <Applications></Applications>
        </Route>
        <Route exact={true} path="/view-application/:idApp">
          <ViewApplication></ViewApplication>
        </Route>
        <Route exact={true} path="/view-deployment/:requestId">
          <ViewDeployment></ViewDeployment>
        </Route> */}
      </Switch>
    </div>
  );
};

Content.displayName = "Content";
Content.propTypes = {
  page: PropTypes.string,
};

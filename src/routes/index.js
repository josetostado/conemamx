import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/homepage";

function Routes() {
  return (
      <Switch>
        <Route
          exact
          path={`/`}
          component={HomePage}
        />    
      </Switch>

  );
}

export default Routes;

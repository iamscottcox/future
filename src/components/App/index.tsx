import "./style.css";

import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import OffersPage from "src/components/Pages/Offers";
import VolumesPage from "src/components/Pages/Volumes";

export const App: FC = () => (
  <>
    <Switch>
      <Route path="/offers">
        <OffersPage />
      </Route>
      <Route path="/volumes">
        <VolumesPage />
      </Route>
      <Route path="/">
        <Redirect to="/offers" />
      </Route>
    </Switch>
  </>
);

export default App;

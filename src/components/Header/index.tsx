import { AppBar, Toolbar } from "@material-ui/core";
import React, { FC } from "react";

import NavLink from "./NavLink";

export const Header: FC = () => (
  <AppBar position="fixed">
    <Toolbar>
      <NavLink to="/offers">Offers</NavLink>
      <NavLink to="/volumes">Volumes</NavLink>
    </Toolbar>
  </AppBar>
);

export default Header;

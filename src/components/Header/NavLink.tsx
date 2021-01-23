import { Button, styled } from "@material-ui/core";
import { NavLink, NavLinkProps } from "react-router-dom";
import React, { FC } from "react";

interface CustomNavLinkProps extends NavLinkProps {
  className?: string;
}

const CustomNavLink: FC<CustomNavLinkProps> = ({ children, to, className }) => (
  <NavLink activeStyle={{ color: "yellow" }} to={to} className={className}>
    <Button color="inherit">{children}</Button>
  </NavLink>
);

export default styled(CustomNavLink)({
  color: "#fff",
  textDecoration: "none",
});

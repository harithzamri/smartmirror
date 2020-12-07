import React from "react";
import { Container, Inner, TextLink, MenuIcon } from "./styles/navbar";

export default function Nav({ children, ...restProps }) {
  return (
    <Container>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
}

Nav.TextLink = function NavTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Nav.MenuIcon = function NavMenuIcon({ children, ...restProps }) {
  return (
    <MenuIcon {...restProps}>
      {children} <i className={false ? "fas fa-times" : "fas fa-bars"} />
    </MenuIcon>
  );
};

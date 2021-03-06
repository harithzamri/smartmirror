import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  TextLink,
  MenuIcon,
  NavMenu,
  NavMenuActive,
  Item,
  Logo,
} from "./styles/navbar";
import { Link as ReactRouterLink } from "react-router-dom";

const ClickContext = createContext();

export default function Nav({ children, ...restProps }) {
  const [click, setClick] = useState(false);
  return (
    <ClickContext.Provider value={{ click, setClick }}>
      <Container>
        <Inner {...restProps}>{children}</Inner>
      </Container>
    </ClickContext.Provider>
  );
}

Nav.Logo = function NavLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Nav.TextLink = function NavTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Nav.MenuIcon = function NavMenuIcon({ children, ...restProps }) {
  const { click, setClick } = useContext(ClickContext);
  const handleClick = () => setClick(!click);
  return (
    <MenuIcon {...restProps} onClick={handleClick}>
      {children} <i className={click ? "fas fa-times" : "fas fa-bars"} />
    </MenuIcon>
  );
};

Nav.List = function NavList({ children, ...restProps }) {
  const { click } = useContext(ClickContext);
  const List = click ? NavMenuActive : NavMenu;

  return <List {...restProps}>{children}</List>;
};

Nav.Item = function NavItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

import React from "react";
import { Nav } from "../components";

export default function NavBarContainer() {
  return (
    <>
      <Nav>
        <Nav.Title to="/">Greatech</Nav.Title>
        <Nav.MenuIcon />
        <Nav.List>
          <Nav.Item>
            <Nav.TextLink to="/">Home</Nav.TextLink>
          </Nav.Item>
          <Nav.Item>
            <Nav.TextLink to="/about">About</Nav.TextLink>
          </Nav.Item>
          <Nav.Item>
            <Nav.TextLink to="/services">Services & Products</Nav.TextLink>
          </Nav.Item>
          <Nav.Item>
            <Nav.TextLink to="/products">News & Events</Nav.TextLink>
          </Nav.Item>
        </Nav.List>
      </Nav>
    </>
  );
}

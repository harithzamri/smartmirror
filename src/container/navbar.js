import React from "react";
import { Nav } from "../components";

export default function NavBarContainer() {
  return (
    <>
      <Nav>
        <Nav.Logo
          to={"/"}
          src={`https://greatech-group.com/images/logo-greatech-color.png`}
        />
        <Nav.List>
          <Nav.Item>
            <Nav.TextLink to="/">Home</Nav.TextLink>
          </Nav.Item>
          <Nav.Item>
            <Nav.TextLink to="/about">About</Nav.TextLink>
          </Nav.Item>
          <Nav.Item>
            <Nav.TextLink to="/products">Services & Products</Nav.TextLink>
          </Nav.Item>
          <Nav.Item>
            <Nav.TextLink to="/news">News & Events</Nav.TextLink>
          </Nav.Item>
        </Nav.List>
      </Nav>
    </>
  );
}

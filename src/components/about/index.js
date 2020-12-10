import React from "react";
import { Container, SmallText, Group, Title } from "./styles/about";

export default function About({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

About.Group = function AboutGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

About.SmallText = function AboutSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

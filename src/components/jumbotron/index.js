import React from "react";
import { Container, Group, Title, SmallText } from "./styles/jumbotron";

export default function Jumbotron({ image, children }) {
  return <Container image={image}>{children}</Container>;
}

Jumbotron.Group = function JumbotronGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SmallText = function JumbotronSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

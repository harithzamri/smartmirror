import React from "react";
import { Jumbotron } from "../components";

export default function JumbotronContainer({ image, text, title }) {
  return (
    <Jumbotron image={image}>
      <Jumbotron.Group>
        <Jumbotron.SmallText>{text}</Jumbotron.SmallText>
        <Jumbotron.Title>{title}</Jumbotron.Title>
      </Jumbotron.Group>
    </Jumbotron>
  );
}

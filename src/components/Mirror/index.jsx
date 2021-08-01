import React from "react";

import { useCount } from "../../Context/Count";

import { Container } from "./styles";

export function Mirror() {
  const { count } = useCount();

  return (
    <Container>
      <h3>Mirror: </h3>
      <p>{count}</p>
    </Container>
  );
}

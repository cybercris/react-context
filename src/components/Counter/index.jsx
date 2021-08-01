import React from "react";

import { useCount } from "../../Context/Count";

import { Container } from "./styles";

export function Counter() {
  const { count, setCount } = useCount();

  return (
    <Container>
      <div>
        <h3>Count: </h3>
        <p>{count}</p>
      </div>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </Container>
  );
}

import React from "react";
import { render } from "@testing-library/react";

import Keyboard from "./Keyboard";

describe("Keyboard", () => {
  test("renders the Keyboard component", () => {
    render(<Keyboard/>);
  });
});
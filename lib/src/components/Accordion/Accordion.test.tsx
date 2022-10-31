import React from "react";
import { render } from "@testing-library/react";

import Accordion from "./Accordion";

describe("Accordion", () => {
  test("renders the Accordion component", () => {
    render(<Accordion title='Titel' content="Hello world!" isOpen={true} />);
  });
});
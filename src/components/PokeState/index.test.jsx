/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import PokeState from "./index";

it("renders homepage unchanged", () => {
  const { container } = render(<PokeState />);
  expect(container).toMatchSnapshot();
});

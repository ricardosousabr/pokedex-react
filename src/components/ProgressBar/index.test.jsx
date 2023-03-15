/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import BarStatus from "./index";

it("renders homepage unchanged", () => {
  const { container } = render(<BarStatus />);
  expect(container).toMatchSnapshot();
});

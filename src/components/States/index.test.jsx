/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import States from "./index";

const mock = {
  stats: [
    {
      base_stat: 35,
      stat: {
        name: "hp",
      },
    },
  ],
  abilities: [
    {
      ability: {
        name: "static",
      },
    },
    {
      ability: {
        name: "tttt",
      },
    },
  ],
};
it("renders homepage unchanged", () => {
  jest.mock("./index");
  const { container } = render(<States statesPokemon={mock} />);
  expect(container).toMatchSnapshot();
});

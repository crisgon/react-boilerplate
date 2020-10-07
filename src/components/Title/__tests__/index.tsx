import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import { Title } from "..";

describe("<Title />", () => {
  it("Render correctly", () => {
    const { getByText } = render(<Title title="React Boilerplate Teste" />);
    expect(getByText("React Boilerplate Teste")).toBeInTheDocument();
  });
});

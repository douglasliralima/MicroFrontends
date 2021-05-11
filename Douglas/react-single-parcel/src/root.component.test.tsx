import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

// Podemos realizar testes em nosso microfrontend, como conseguiriamos em qualquer microfrontend
describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root name="Testapp" />);
    expect(getByText(/Testapp is mounted!/i)).toBeInTheDocument();
  });
});

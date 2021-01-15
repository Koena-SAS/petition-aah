import { render } from "@testing-library/react";
import Home from "../pages/index";

it("displays main elements", () => {
  const { getByText, getByLabelText } = render(<Home />);
  const corner = getByLabelText(/Voir la source/);
  expect(corner).toBeInTheDocument();
  const signaturesCounter = getByText(/je signe !/);
  expect(signaturesCounter).toBeInTheDocument();
  const dateCounter = getByText(/J-/);
  expect(dateCounter).toBeInTheDocument();
});

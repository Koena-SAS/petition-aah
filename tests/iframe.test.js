import { render } from "@testing-library/react";
import Iframe from "../pages/iframe";

it("displays main elements", () => {
  const { getByText } = render(<Iframe />);
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/Nombre total de signatures/);
  expect(signaturesCounter).toBeInTheDocument();
});

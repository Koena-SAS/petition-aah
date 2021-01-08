import { render } from "@testing-library/react";
import IframeContent from "../components/iframe_content";

it("displays main elements", () => {
  const { getByText } = render(<IframeContent />);
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/Nombre total de signatures/);
  expect(signaturesCounter).toBeInTheDocument();
  const buttonSign = getByText(/Signez/);
  expect(buttonSign).toBeInTheDocument();
});

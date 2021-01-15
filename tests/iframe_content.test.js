import { render } from "@testing-library/react";
import IframeContent from "../components/iframe_content";

it("displays main elements with block format", () => {
  const { getByText } = render(<IframeContent format="block" />);
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/Nombre total de signatures/);
  expect(signaturesCounter).toBeInTheDocument();
  const buttonSign = getByText(/Signez/);
  expect(buttonSign).toBeInTheDocument();
});

it("displays main elements with banner format", () => {
  const { getByText } = render(<IframeContent format="banner" />);
  const dateCounter = getByText(/J-/);
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/je signe !/);
  expect(signaturesCounter).toBeInTheDocument();
});

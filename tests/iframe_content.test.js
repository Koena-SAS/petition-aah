import { render } from "@testing-library/react";
import IframeContent from "../components/iframe_content";

it("displays main elements", () => {
  const { getByText } = render(<IframeContent />);
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/Nombre de signatures/);
  expect(signaturesCounter).toBeInTheDocument();
});

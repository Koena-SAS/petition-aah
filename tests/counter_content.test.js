import { render } from "@testing-library/react";
import CounterContent from "../components/counter_content";

it("displays main elements", () => {
  const { getByText } = render(<CounterContent />);
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/Nombre de signatures/);
  expect(signaturesCounter).toBeInTheDocument();
});

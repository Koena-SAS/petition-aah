import { render } from "@testing-library/react";
import CounterBlock from "../../components/counter_elements/counter_block";

it("displays main elements", () => {
  const { getByText } = render(<CounterBlock />);
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/Nombre total de signatures/);
  expect(signaturesCounter).toBeInTheDocument();
  const buttonSign = getByText(/Signez/);
  expect(buttonSign).toBeInTheDocument();
});

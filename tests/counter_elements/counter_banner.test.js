import { render } from "@testing-library/react";
import CounterBanner from "../../components/counter_elements/counter_banner";

it("displays main element", () => {
  const { getByText } = render(<CounterBanner />);
  expect(getByText(/J-/)).toBeInTheDocument();
});

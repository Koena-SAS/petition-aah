import { render } from "@testing-library/react";
import CounterBanner from "../../components/counter_elements/counter_banner";

it("displays main element with signaturesReached to false", () => {
  const { getByText } = render(<CounterBanner signaturesReached={false} />);
  expect(getByText(/J-/)).toBeInTheDocument();
});

it("displays main element with signaturesReached to true", () => {
  const { getByText } = render(<CounterBanner signaturesReached={true} />);
  expect(
    getByText(/signatures pour notre autonomie : je signe !/)
  ).toBeInTheDocument();
});

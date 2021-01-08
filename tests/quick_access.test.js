import { render } from "@testing-library/react";
import QuickAccess from "../components/quick_access";

it("displays quick access links", () => {
  const { getByText } = render(<QuickAccess />);
  expect(getByText("Aller à l'en-tête")).toBeInTheDocument();
});

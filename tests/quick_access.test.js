import { render } from "@testing-library/react";
import QuickAccess from "../components/quick_access";

it("displays quick access links", () => {
  const { getByText } = render(<QuickAccess onClickFocus={() => null} />);
  expect(getByText("Aller au compteur")).toBeInTheDocument();
});

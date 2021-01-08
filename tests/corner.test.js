import { render } from "@testing-library/react";
import Corner from "../components/corner";

it("displays the link", () => {
  const { getByLabelText } = render(<Corner />);
  expect(
    getByLabelText("Voir la source et contribuer sur GitHub")
  ).toBeInTheDocument();
});

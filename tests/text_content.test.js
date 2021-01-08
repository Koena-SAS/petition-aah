import { render } from "@testing-library/react";
import TextContent from "../components/text_content";

it("displays text content", () => {
  const { getByText } = render(<TextContent />);
  expect(getByText("De quoi s'agit-il ?")).toBeInTheDocument();
});

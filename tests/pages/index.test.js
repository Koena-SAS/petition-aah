import { getPage } from "next-page-tester";
import { screen } from "@testing-library/react";

it("displays main elements", async () => {
  const { render } = await getPage({
    route: "/",
  });
  render();
  const corner = screen.getByLabelText(/Voir la source/);
  expect(corner).toBeInTheDocument();
  const signaturesCounter = screen.getByText(/je signe !/);
  expect(signaturesCounter).toBeInTheDocument();
  const dateCounter = screen.getByText(/J-/);
  expect(dateCounter).toBeInTheDocument();
});

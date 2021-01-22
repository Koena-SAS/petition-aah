import { getPage } from "next-page-tester";
import { screen, fireEvent } from "@testing-library/react";

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

it("places the focus on counters link when using counter qui link", async () => {
  const { render } = await getPage({
    route: "/",
  });
  render();
  const counterLink = screen.getByText(/J-/);
  expect(counterLink).not.toHaveFocus();
  const counterQuickLink = screen.getByText("Aller au compteur");
  fireEvent.click(counterQuickLink);
  expect(counterLink).toHaveFocus();
});

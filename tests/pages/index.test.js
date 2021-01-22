import { getPage } from "next-page-tester";
import { screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import { senateResponse } from "../counter_elements/counter_test_utils";

jest.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue(senateResponse(500));
});

afterEach(() => {
  jest.clearAllMocks();
});

it("displays main elements with signatures tarket not reached", async () => {
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

it("displays main elements with signatures tarket reached", async () => {
  axios.get.mockResolvedValue(senateResponse(120000));
  const { render } = await getPage({
    route: "/",
  });
  render();
  const corner = screen.getByLabelText(/Voir la source/);
  expect(corner).toBeInTheDocument();
  const signaturesCounter = screen.getByText(/je signe !/);
  expect(signaturesCounter).toBeInTheDocument();
  const dateCounter = screen.queryByText(/J-/);
  expect(dateCounter).not.toBeInTheDocument();
});

it("places the focus on counters link when using counter quick link", async () => {
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

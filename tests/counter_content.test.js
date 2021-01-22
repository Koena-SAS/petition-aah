import { render, fireEvent, act, waitFor } from "@testing-library/react";
import axios from "axios";
import CounterContent from "../components/counter_content";
import { senateResponse } from "./counter_elements/counter_test_utils";

jest.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue(senateResponse(500));
});

afterEach(() => {
  jest.clearAllMocks();
});

it("displays main elements with signaturesReached to false", () => {
  const { getByText } = render(<CounterContent signaturesReached={false} />);
  const dateCounter = getByText(/J-/);
  expect(dateCounter).toBeInTheDocument();
  const buttonIntegrate = getByText(/Intégrer/);
  expect(buttonIntegrate).toBeInTheDocument();
});

it("displays main elements with signaturesReached to true", () => {
  const { getByText } = render(<CounterContent signaturesReached={true} />);
  const dateCounter = getByText(/signatures pour notre autonomie : je signe !/);
  expect(dateCounter).toBeInTheDocument();
  const buttonIntegrate = getByText(/Intégrer/);
  expect(buttonIntegrate).toBeInTheDocument();
});

it("displays integration dialog when click on integrate button", () => {
  const { getByLabelText, getByText } = render(
    <CounterContent signaturesReached={false} />
  );
  const integrationButton = getByText("Intégrer");
  fireEvent.click(integrationButton);
  const dialog = getByLabelText("Intégrer les compteurs sur votre site");
  expect(dialog).toBeInTheDocument();
});

it("closes integration dialog when click on close button", async () => {
  const { queryByLabelText, getByLabelText, getByText } = render(
    <CounterContent signaturesReached={false} />
  );
  const integrationButton = getByText("Intégrer");
  fireEvent.click(integrationButton);
  let dialog = getByLabelText("Intégrer les compteurs sur votre site");
  expect(dialog).toBeInTheDocument();
  const closeButton = getByText("Fermer");
  fireEvent.click(closeButton);
  await act(async () => {
    fireEvent.click(closeButton);
    await new Promise((r) => setTimeout(r, 250));
  });
  dialog = queryByLabelText("Intégrer les compteurs sur votre site");
  expect(dialog).not.toBeInTheDocument();
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
});

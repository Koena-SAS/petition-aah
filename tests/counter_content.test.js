import { render, fireEvent, act, waitFor } from "@testing-library/react";
import axios from "axios";
import CounterContent from "../components/counter_content";

jest.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue({ data: "" });
});

afterEach(() => {
  jest.clearAllMocks();
});

it("displays main elements", () => {
  const { getByText } = render(<CounterContent format="block" />);
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
  const buttonIntegrate = getByText(/Intégrer/);
  expect(buttonIntegrate).toBeInTheDocument();
});

it("displays integration dialog when click on integrate button", () => {
  const { getByLabelText, getByText } = render(
    <CounterContent format="block" />
  );
  const integrationButton = getByText("Intégrer");
  fireEvent.click(integrationButton);
  const dialog = getByLabelText("Intégrer les compteurs sur votre site");
  expect(dialog).toBeInTheDocument();
});

it("closes integration dialog when click on close button", async () => {
  const { queryByLabelText, getByLabelText, getByText } = render(
    <CounterContent format="block" />
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

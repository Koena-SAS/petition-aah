import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import IntegrationDialog from "../components/integration_dialog";

jest.mock("axios");

beforeEach(() => {
  axios.get.mockResolvedValue({ data: "" });
});

afterEach(() => {
  jest.clearAllMocks();
});

it("displays main elements", async () => {
  const { getByText } = render(
    <IntegrationDialog onClose={() => null} open={true} />
  );
  const integrationText = getByText(/Intégrer les compteurs/);
  expect(integrationText).toBeInTheDocument();
  const bannerCounter = getByText(/J-/);
  expect(bannerCounter).toBeInTheDocument();
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
});

it("focuses on the first element of the modal when opened", () => {
  const { getByText } = render(
    <IntegrationDialog onClose={() => null} open={true} />
  );
  const firstElement = getByText(/J-/);
  expect(firstElement).toHaveFocus();
});

it("copies iframe code from textarea content when click on copy", async () => {
  document.execCommand = jest.fn();
  const { getByText } = render(
    <IntegrationDialog onClose={() => null} open={true} />
  );
  const copyButton = getByText(/Copier/);
  fireEvent.click(copyButton);
  expect(document.execCommand).toHaveBeenCalledWith("copy");
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
});

it("displays block counters when clicking on correct format option", async () => {
  const { getByText, getByLabelText, queryByText } = render(
    <IntegrationDialog onClose={() => null} open={true} />
  );
  const bannerCounter = getByText(/J-/);
  expect(bannerCounter).toBeInTheDocument();
  const formatOption = getByLabelText("Bloc");
  fireEvent.click(formatOption);
  expect(queryByText(/J-/)).not.toBeInTheDocument();
  await waitFor(() => expect(getByText(/jours/)).toBeInTheDocument());
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
});

it("displays color option only for block format", async () => {
  const { getByLabelText, queryByLabelText } = render(
    <IntegrationDialog onClose={() => null} open={true} />
  );
  const darkOption = getByLabelText("Fond foncé");
  expect(darkOption).toBeInTheDocument();
  const formatOption = getByLabelText("Bloc");
  fireEvent.click(formatOption);
  expect(queryByLabelText("Fond foncé")).not.toBeInTheDocument();
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
});

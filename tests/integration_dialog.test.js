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
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
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

import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import Counter from "./counter";

jest.mock("axios");

beforeEach(() => {
  const senatGetResponse = {
    data: `<div id="initiative-416-votes-count" class="progress__bar progress__bar--vertical">
  <div class="progress__bar__title">

          <span class="progress__bar__number">500</span>/100000      <span class="progress__bar__text">SIGNATURES</span>
      </div>
      <div class="progress progress__bar__bar" role="progressbar" tabindex="0" aria-valuenow="39.421" aria-valuemin="0" aria-valuetext="39.421 percent" aria-valuemax="100">
      <div class="progress-meter progress__bar__bar--complete" style="width: 39.421%"></div>
      <div class="progress__bar__bar--incomplete" style="width:calc(100% - 39.421%);"></div>
    </div>

          <div class="progress__bar__subtitle">
        Besoin de plus de signatures      </div>
      </div>`,
  };
  axios.get.mockResolvedValue(senatGetResponse);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Initial behavior", () => {
  it("displays the given value at the beginning", async () => {
    const { getByText } = render(<Counter value={100} />);
    expect(getByText("100")).toBeInTheDocument();
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });

  it("displays 0 at the beginning if no value provided", async () => {
    const { getByText } = render(<Counter />);
    expect(getByText("0")).toBeInTheDocument();
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });
});

describe("Fetching value", () => {
  it("fetches and displays counter value", async () => {
    const { getByText } = render(<Counter />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    expect(getByText("500")).toBeInTheDocument();
  });
});

import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import Counter, {
  generateNextWaitTime,
} from "../../components/counter_elements/signatures_counter";

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
  describe("block format", () => {
    it("displays the given value at the beginning", async () => {
      const { getByText } = render(
        <Counter
          value={100}
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="block"
        />
      );
      expect(getByText("100")).toBeInTheDocument();
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });

    it("displays 0 at the beginning if no value provided and format block", async () => {
      const { getByText, queryByText } = render(
        <Counter countAnimationFrames={0} maxTotalRequests={1} format="block" />
      );
      expect(getByText("0")).toBeInTheDocument();
      expect(queryByText("100000")).not.toBeInTheDocument();
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });
  });

  describe("banner format", () => {
    it("displays the given value at the beginning", async () => {
      const { getByText } = render(
        <Counter
          value={100}
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="banner"
        />
      );
      expect(getByText("100")).toBeInTheDocument();
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });

    it("displays 100 000 at the beginning if no value provided and format banner", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="banner"
        />
      );
      expect(getByText("100000")).toBeInTheDocument();
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });
  });
});

describe("Fetching value", () => {
  let senatGetResponse;
  beforeEach(() => {
    senatGetResponse = {
      data: `<div id="initiative-416-votes-count" class="progress__bar progress__bar--vertical">
  <div class="progress__bar__title">

          <span class="progress__bar__number">653</span>/100000      <span class="progress__bar__text">SIGNATURES</span>
      </div>
      <div class="progress progress__bar__bar" role="progressbar" tabindex="0" aria-valuenow="39.421" aria-valuemin="0" aria-valuetext="39.421 percent" aria-valuemax="100">
      <div class="progress-meter progress__bar__bar--complete" style="width: 39.421%"></div>
      <div class="progress__bar__bar--incomplete" style="width:calc(100% - 39.421%);"></div>
    </div>

          <div class="progress__bar__subtitle">
        Besoin de plus de signatures      </div>
      </div>`,
    };
  });

  describe("block format", () => {
    it("fetches and displays counter value", async () => {
      const { getByText } = render(
        <Counter countAnimationFrames={0} maxTotalRequests={1} format="block" />
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
      expect(getByText("500")).toBeInTheDocument();
    });

    it("refetches and displays changed counter value", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={2}
          initialTimeToWait={10}
          format="block"
        />
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
      expect(getByText("500")).toBeInTheDocument();
      axios.get.mockResolvedValue(senatGetResponse);
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
      expect(getByText("653")).toBeInTheDocument();
    });
  });

  describe("banner format", () => {
    it("fetches and displays counter value", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="banner"
        />
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
      expect(getByText("99500")).toBeInTheDocument();
    });

    it("refetches and displays changed counter value", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={2}
          initialTimeToWait={10}
          format="banner"
        />
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
      expect(getByText("99500")).toBeInTheDocument();
      axios.get.mockResolvedValue(senatGetResponse);
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
      expect(getByText("99347")).toBeInTheDocument();
    });
  });
});

describe("Security tests", () => {
  it("ends after maxTotalRequests in block format", async () => {
    render(
      <Counter
        countAnimationFrames={0}
        maxTotalRequests={10}
        initialTimeToWait={1}
        format="block"
      />
    );
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(10));
    await waitDelay(100);
    expect(axios.get).toHaveBeenCalledTimes(10);
  });

  it("ends after maxTotalRequests in banner format", async () => {
    render(
      <Counter
        countAnimationFrames={0}
        maxTotalRequests={10}
        initialTimeToWait={1}
        format="banner"
      />
    );
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(10));
    await waitDelay(100);
    expect(axios.get).toHaveBeenCalledTimes(10);
  });
});

async function waitDelay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

describe("generateNextWaitTime helper", () => {
  it("generates elements correctly with known values", () => {
    const generator = generateNextWaitTime(135, 1.35, 100000);
    for (let i = 1; i < 20; i++) {
      expect(generator.next().value).toBeCloseTo(135 * Math.pow(1.35, i));
    }
  });

  it("does not generate elements above growingLimit", () => {
    const generator = generateNextWaitTime(10, 1.35, 50);
    for (let i = 0; i < 5; i++) {
      expect(generator.next().value).not.toEqual(50);
    }
    for (let i = 1; i < 20; i++) {
      expect(generator.next().value).toEqual(50);
    }
  });
});

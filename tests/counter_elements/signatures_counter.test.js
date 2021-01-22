import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import Counter, {
  generateNextWaitTime,
} from "../../components/counter_elements/signatures_counter";
import { senateResponse } from "./counter_test_utils";

jest.mock("axios");

beforeEach(() => {
  const senatGetResponse = senateResponse(500);
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

    it("displays 0 at the beginning if no value provided and countReverse true", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="block"
          countReverse={true}
        />
      );
      expect(getByText("0")).toBeInTheDocument();
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });

    it("displays 0 at the beginning if no value provided and countReverse false", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="block"
          countReverse={false}
        />
      );
      expect(getByText("0")).toBeInTheDocument();
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

    it("displays 100 000 at the beginning if no value provided and countReverse true", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="banner"
          countReverse={true}
        />
      );
      expect(getByText(/100.000/)).toBeInTheDocument();
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });

    it("displays 0 at the beginning if no value provided and countReverse false", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="banner"
          countReverse={false}
        />
      );
      expect(getByText("0")).toBeInTheDocument();
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
    });
  });
});

describe("Fetching value", () => {
  let senatGetResponse;
  beforeEach(() => {
    senatGetResponse = senateResponse(653);
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
    it("fetches and displays correct counter value with countReverse to true", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="banner"
          countReverse={true}
        />
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
      expect(getByText(/99.500/)).toBeInTheDocument();
    });

    it("fetches and displays correct counter value with countReverse to false", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={1}
          format="banner"
          countReverse={false}
        />
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
      expect(getByText("500")).toBeInTheDocument();
    });

    it("refetches and displays changed counter value with countReverse to true", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={2}
          initialTimeToWait={10}
          format="banner"
          countReverse={true}
        />
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
      expect(getByText(/99.500/)).toBeInTheDocument();
      axios.get.mockResolvedValue(senatGetResponse);
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
      expect(getByText(/99.347/)).toBeInTheDocument();
    });

    it("refetches and displays changed counter value with countReverse to false", async () => {
      const { getByText } = render(
        <Counter
          countAnimationFrames={0}
          maxTotalRequests={2}
          initialTimeToWait={10}
          format="banner"
          countReverse={false}
        />
      );
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
      expect(getByText("500")).toBeInTheDocument();
      axios.get.mockResolvedValue(senatGetResponse);
      await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));
      expect(getByText("653")).toBeInTheDocument();
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

  it("ends after maxTotalRequests in banner format and counterReverse to true", async () => {
    render(
      <Counter
        countAnimationFrames={0}
        maxTotalRequests={10}
        initialTimeToWait={1}
        format="banner"
        countReverse={true}
      />
    );
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(10));
    await waitDelay(100);
    expect(axios.get).toHaveBeenCalledTimes(10);
  });

  it("ends after maxTotalRequests in banner format and counterReverse to false", async () => {
    render(
      <Counter
        countAnimationFrames={0}
        maxTotalRequests={10}
        initialTimeToWait={1}
        format="banner"
        countReverse={false}
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

import { render } from "@testing-library/react";
import Counter, {
  dateDiff,
} from "../../components/counter_elements/date_counter";

it("displays correct date elements with block format", () => {
  const { getByText } = render(<Counter format="block" />);
  expect(getByText("jours")).toBeInTheDocument();
  expect(getByText("heures")).toBeInTheDocument();
  expect(getByText("minutes")).toBeInTheDocument();
});

it("displays correct date elements with banner format", () => {
  const { getByText } = render(<Counter format="banner" />);
  expect(getByText(/[0-9]+/)).toBeInTheDocument();
});

describe("dateDiff helper", () => {
  it("returns correct date from known examples", () => {
    const date1 = new Date(2021, 3, 10, 13, 2, 10);
    const date2 = new Date(2025, 8, 12, 3, 50, 1);
    const result = dateDiff(date1, date2);
    expect(result).toEqual({ days: 1615, hours: 14, minutes: 47, seconds: 51 });
  });

  it("returns zero date with second earlier later than first", () => {
    const date1 = new Date(2021, 3, 10, 13, 2, 10);
    const date2 = new Date(2025, 8, 12, 3, 50, 1);
    const result = dateDiff(date2, date1);
    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });

  it("returns zero date when applied with the same date", () => {
    const date1 = new Date(2021, 3, 10, 13, 2, 10);
    const result = dateDiff(date1, date1);
    expect(result).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  });
});

import { render } from "@testing-library/react";
import Counter, { dateDiff } from "./date_counter";

it("displays date elements", () => {
  const { getByText } = render(<Counter />);
  expect(getByText("jours")).toBeInTheDocument();
  expect(getByText("heures")).toBeInTheDocument();
  expect(getByText("minutes")).toBeInTheDocument();
});

describe("dateDiff helper", () => {
  it("returns correct date with from known examples", () => {
    const date1 = new Date(2021, 3, 10, 13, 2, 10);
    const date2 = new Date(2025, 8, 12, 3, 50, 1);
    const result = dateDiff(date1, date2);
    expect(result).toEqual({ days: 1615, hours: 14, minutes: 47, seconds: 51 });
  });

  it("returns correct negative date with second earlier later than first", () => {
    const date1 = new Date(2021, 3, 10, 13, 2, 10);
    const date2 = new Date(2025, 8, 12, 3, 50, 1);
    const result = dateDiff(date2, date1);
    expect(result).toEqual({
      days: -1615,
      hours: -14,
      minutes: -47,
      seconds: -51,
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

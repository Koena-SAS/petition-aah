import { render } from "@testing-library/react";
import IframeContent from "../components/iframe_content";

it("displays main elements with block format and signaturesReached false", () => {
  const { getByText } = render(
    <IframeContent format="block" signaturesReached={false} />
  );
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/Nombre total de signatures/);
  expect(signaturesCounter).toBeInTheDocument();
  const buttonSign = getByText(/Signez/);
  expect(buttonSign).toBeInTheDocument();
});

it("displays main elements with block format and signaturesReached true", () => {
  const { getByText } = render(
    <IframeContent format="block" signaturesReached={true} />
  );
  const dateCounter = getByText("jours");
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/Nombre total de signatures/);
  expect(signaturesCounter).toBeInTheDocument();
  const buttonSign = getByText(/Signez/);
  expect(buttonSign).toBeInTheDocument();
});

it("displays main elements with banner format and signaturesReached false", () => {
  const { getByText } = render(
    <IframeContent format="banner" signaturesReached={false} />
  );
  const dateCounter = getByText(/J-/);
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/je signe !/);
  expect(signaturesCounter).toBeInTheDocument();
});

it("displays main elements with banner format and signaturesReached true", () => {
  const { getByText } = render(
    <IframeContent format="banner" signaturesReached={true} />
  );
  const dateCounter = getByText(/signatures pour notre autonomie/);
  expect(dateCounter).toBeInTheDocument();
  const signaturesCounter = getByText(/je signe !/);
  expect(signaturesCounter).toBeInTheDocument();
});

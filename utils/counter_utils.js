/**
 * Utils importing libraries to be used only server side.
 * It imports jsdom that is not useful client side as parsing
 * HTML is one of the main tasks of a browser.
 */
import { JSDOM } from "jsdom";
import {
  MAX_SIGNATURES,
  fetchInitiative,
} from "../components/counter_elements/counter_utils";

/**
 * Returns true if signatures target have been reached, false otherwise.
 */
export async function haveSignaturesReachedTarget() {
  const signaturesNumber = await fetchInitiative(parseFromHTMLServerSide);
  if (signaturesNumber >= MAX_SIGNATURES) {
    return true;
  } else {
    return false;
  }
}

function parseFromHTMLServerSide(text) {
  const dom = new JSDOM(text);
  const fetchedValue = parseInt(
    dom.window.document.querySelector(
      "#initiative-416-votes-count span.progress__bar__number"
    ).textContent
  );
  return fetchedValue;
}

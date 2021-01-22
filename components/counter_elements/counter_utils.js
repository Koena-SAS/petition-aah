import axios from "axios";

export const MAX_SIGNATURES = 100000;

/**
 * Fetches and returns the total signatures number.
 */
export async function fetchInitiative(parseFromHTML = parseFromHTMLClientSide) {
  // We are querying/parsing the html page to get the count value but the
  // senate website has an API, and when they update their Decidim instance
  // we will be able to query the GraphQL API directly to get that value
  // cf. https://github.com/decidim/decidim/discussions/7080
  const response = await axios.get(
    `https://petitions.senat.fr/initiatives/i-416`
  );
  return parseFromHTML(response.data);
}

function parseFromHTMLClientSide(text) {
  const parser = new DOMParser();
  const data = parser.parseFromString(text, "text/html");
  const fetchedValue = parseInt(
    data.querySelector("#initiative-416-votes-count span.progress__bar__number")
      .textContent
  );
  return fetchedValue;
}

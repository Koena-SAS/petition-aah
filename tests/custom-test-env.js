const { TestEnvironment } = require("jest-environment-jsdom");

// Custom test environment copied from https://github.com/inrupt/solid-client-authn-js/blob/main/tests/environment/customEnvironment.js
// in order to add TextEncoder to jsdom.

module.exports = class CustomTestEnvironment extends TestEnvironment {
  async setup() {
    await super.setup();
    if (typeof this.global.TextEncoder === "undefined") {
      const { TextEncoder, TextDecoder } = require("util");
      this.global.TextEncoder = TextEncoder;
      this.global.TextDecoder = TextDecoder;
      this.global.ArrayBuffer = ArrayBuffer;
      this.global.Uint8Array = Uint8Array;
    }
  }
};

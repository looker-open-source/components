"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseOption = parseOption;

function parseOption(text) {
  try {
    var parsed = JSON.parse(text);

    if (parsed.value) {
      return parsed;
    } else {
      return {
        value: text
      };
    }
  } catch (e) {
    return {
      value: text
    };
  }
}
//# sourceMappingURL=parseOption.js.map
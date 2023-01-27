"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _get_number_from_string = require("./get_number_from_string");
Object.keys(_get_number_from_string).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _get_number_from_string[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _get_number_from_string[key];
    }
  });
});
var _sanitize_number = require("./sanitize_number");
Object.keys(_sanitize_number).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sanitize_number[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _sanitize_number[key];
    }
  });
});
//# sourceMappingURL=index.js.map
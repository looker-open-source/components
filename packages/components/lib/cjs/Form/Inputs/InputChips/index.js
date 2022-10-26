"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InputChips = require("./InputChips");

Object.keys(_InputChips).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputChips[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputChips[key];
    }
  });
});

var _InputChipsBase = require("./InputChipsBase");

Object.keys(_InputChipsBase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _InputChipsBase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _InputChipsBase[key];
    }
  });
});
//# sourceMappingURL=index.js.map
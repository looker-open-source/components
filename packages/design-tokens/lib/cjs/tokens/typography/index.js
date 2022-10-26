"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _font_families = require("./font_families");

Object.keys(_font_families).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _font_families[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _font_families[key];
    }
  });
});

var _font_sizes = require("./font_sizes");

Object.keys(_font_sizes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _font_sizes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _font_sizes[key];
    }
  });
});

var _font_weights = require("./font_weights");

Object.keys(_font_weights).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _font_weights[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _font_weights[key];
    }
  });
});

var _line_heights = require("./line_heights");

Object.keys(_line_heights).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _line_heights[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _line_heights[key];
    }
  });
});
//# sourceMappingURL=index.js.map
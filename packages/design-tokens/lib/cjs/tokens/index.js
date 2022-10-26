"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breakpoints = require("./breakpoints");

Object.keys(_breakpoints).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _breakpoints[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _breakpoints[key];
    }
  });
});

var _easings = require("./easings");

Object.keys(_easings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _easings[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _easings[key];
    }
  });
});

var _radii = require("./radii");

Object.keys(_radii).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _radii[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _radii[key];
    }
  });
});

var _shadows = require("./shadows");

Object.keys(_shadows).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _shadows[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shadows[key];
    }
  });
});

var _size = require("./size");

Object.keys(_size).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _size[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _size[key];
    }
  });
});

var _transitions = require("./transitions");

Object.keys(_transitions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _transitions[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _transitions[key];
    }
  });
});

var _typography = require("./typography");

Object.keys(_typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _typography[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typography[key];
    }
  });
});
//# sourceMappingURL=index.js.map
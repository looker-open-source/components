"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _with_theme = require("./with_theme");

Object.keys(_with_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _with_theme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _with_theme[key];
    }
  });
});

var _reactTestingLibrary = require("./helpers/react-testing-library");

Object.keys(_reactTestingLibrary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _reactTestingLibrary[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _reactTestingLibrary[key];
    }
  });
});
//# sourceMappingURL=index.js.map
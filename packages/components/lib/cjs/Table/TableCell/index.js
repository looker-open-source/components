"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TableDataCell = require("./TableDataCell");

Object.keys(_TableDataCell).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableDataCell[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableDataCell[key];
    }
  });
});

var _TableHeaderCell = require("./TableHeaderCell");

Object.keys(_TableHeaderCell).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableHeaderCell[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableHeaderCell[key];
    }
  });
});
//# sourceMappingURL=index.js.map
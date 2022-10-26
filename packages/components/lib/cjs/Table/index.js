"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Table = require("./Table");

Object.keys(_Table).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Table[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Table[key];
    }
  });
});

var _TableCell = require("./TableCell");

Object.keys(_TableCell).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableCell[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableCell[key];
    }
  });
});

var _TableSection = require("./TableSection");

Object.keys(_TableSection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableSection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableSection[key];
    }
  });
});

var _TableRow = require("./TableRow");

Object.keys(_TableRow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableRow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableRow[key];
    }
  });
});
//# sourceMappingURL=index.js.map
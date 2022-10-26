"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isValidColor = require("./isValidColor");

Object.keys(_isValidColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isValidColor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isValidColor[key];
    }
  });
});

var _hsvToHex = require("./hsvToHex");

Object.keys(_hsvToHex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hsvToHex[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hsvToHex[key];
    }
  });
});

var _simpleHsvToHex = require("./simpleHsvToHex");

Object.keys(_simpleHsvToHex).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _simpleHsvToHex[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _simpleHsvToHex[key];
    }
  });
});

var _stringToSimpleHsv = require("./stringToSimpleHsv");

Object.keys(_stringToSimpleHsv).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _stringToSimpleHsv[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _stringToSimpleHsv[key];
    }
  });
});
//# sourceMappingURL=index.js.map
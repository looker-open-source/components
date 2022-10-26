"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getErrorResponse = require("./getErrorResponse");

Object.keys(_getErrorResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getErrorResponse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getErrorResponse[key];
    }
  });
});

var _isErrorResponse = require("./isErrorResponse");

Object.keys(_isErrorResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isErrorResponse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isErrorResponse[key];
    }
  });
});

var _isSuccessResponse = require("./isSuccessResponse");

Object.keys(_isSuccessResponse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _isSuccessResponse[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isSuccessResponse[key];
    }
  });
});
//# sourceMappingURL=index.js.map
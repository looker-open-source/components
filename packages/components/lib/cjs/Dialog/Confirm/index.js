"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Confirm = require("./Confirm");

Object.keys(_Confirm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Confirm[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Confirm[key];
    }
  });
});

var _ConfirmLayout = require("./ConfirmLayout");

Object.keys(_ConfirmLayout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ConfirmLayout[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ConfirmLayout[key];
    }
  });
});
//# sourceMappingURL=index.js.map
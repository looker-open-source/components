"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ModalHeader = require("./ModalHeader");

Object.keys(_ModalHeader).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ModalHeader[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModalHeader[key];
    }
  });
});
//# sourceMappingURL=index.js.map
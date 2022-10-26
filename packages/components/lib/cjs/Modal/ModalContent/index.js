"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ModalContent = require("./ModalContent");

Object.keys(_ModalContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ModalContent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ModalContent[key];
    }
  });
});
//# sourceMappingURL=index.js.map
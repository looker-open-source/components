"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PopoverContent = require("./PopoverContent");

Object.keys(_PopoverContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _PopoverContent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PopoverContent[key];
    }
  });
});
//# sourceMappingURL=index.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CustomBorderColor", {
  enumerable: true,
  get: function get() {
    return _CustomBorderColor["default"];
  }
});
Object.defineProperty(exports, "Default", {
  enumerable: true,
  get: function get() {
    return _Default["default"];
  }
});
Object.defineProperty(exports, "NoBorder", {
  enumerable: true,
  get: function get() {
    return _NoBorder["default"];
  }
});
Object.defineProperty(exports, "Raised", {
  enumerable: true,
  get: function get() {
    return _Raised["default"];
  }
});
exports["default"] = void 0;

var _CustomBorderColor = _interopRequireDefault(require("./CustomBorderColor"));

var _NoBorder = _interopRequireDefault(require("./NoBorder"));

var _Raised = _interopRequireDefault(require("./Raised"));

var _Default = _interopRequireDefault(require("./Default"));

var _default = {
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Card'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
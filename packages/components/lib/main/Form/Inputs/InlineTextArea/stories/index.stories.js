"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _Basic["default"];
  }
});
Object.defineProperty(exports, "Disabled", {
  enumerable: true,
  get: function get() {
    return _Disabled["default"];
  }
});
Object.defineProperty(exports, "ReadOnly", {
  enumerable: true,
  get: function get() {
    return _ReadOnly["default"];
  }
});
Object.defineProperty(exports, "Underline", {
  enumerable: true,
  get: function get() {
    return _Underline["default"];
  }
});
exports["default"] = void 0;
var _ = require("../");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Disabled = _interopRequireDefault(require("./Disabled"));
var _ReadOnly = _interopRequireDefault(require("./ReadOnly"));
var _Underline = _interopRequireDefault(require("./Underline"));
var _default = {
  component: _.InlineTextArea,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/InlineTextArea'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
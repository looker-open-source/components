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
Object.defineProperty(exports, "Critical", {
  enumerable: true,
  get: function get() {
    return _Critical["default"];
  }
});
Object.defineProperty(exports, "Layout", {
  enumerable: true,
  get: function get() {
    return _Layout["default"];
  }
});
Object.defineProperty(exports, "Rich", {
  enumerable: true,
  get: function get() {
    return _Rich["default"];
  }
});
exports["default"] = void 0;
var _Basic = _interopRequireDefault(require("./Basic"));
var _Critical = _interopRequireDefault(require("./Critical"));
var _Rich = _interopRequireDefault(require("./Rich"));
var _Layout = _interopRequireDefault(require("./Layout"));
var _default = {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    },
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Confirm'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
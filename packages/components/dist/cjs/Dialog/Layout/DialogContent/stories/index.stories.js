"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _Basic["default"];
  }
});
Object.defineProperty(exports, "Overflow", {
  enumerable: true,
  get: function get() {
    return _Overflow["default"];
  }
});
exports["default"] = void 0;
var _Basic = _interopRequireDefault(require("./Basic"));
var _Overflow = _interopRequireDefault(require("./Overflow"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
  title: 'Stories/Layout/DialogContent'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
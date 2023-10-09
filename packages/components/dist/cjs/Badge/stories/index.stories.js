"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Intent", {
  enumerable: true,
  get: function get() {
    return _Intent["default"];
  }
});
Object.defineProperty(exports, "Sizes", {
  enumerable: true,
  get: function get() {
    return _Sizes["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _Badge = require("../Badge");
var _Intent = _interopRequireDefault(require("./Intent"));
var _Sizes = _interopRequireDefault(require("./Sizes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Badge.Badge,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Badge'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
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
Object.defineProperty(exports, "Typography", {
  enumerable: true,
  get: function get() {
    return _Typography["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _Label = require("../Label");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Typography = _interopRequireDefault(require("./Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Label.Label,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Label'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
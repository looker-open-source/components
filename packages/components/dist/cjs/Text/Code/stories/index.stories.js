"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Default", {
  enumerable: true,
  get: function get() {
    return _Default["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _Code = require("../Code");
var _Default = _interopRequireDefault(require("./Default"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Code.Code,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Code'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
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
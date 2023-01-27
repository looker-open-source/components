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
Object.defineProperty(exports, "LineHeight", {
  enumerable: true,
  get: function get() {
    return _LineHeight["default"];
  }
});
Object.defineProperty(exports, "Nesting", {
  enumerable: true,
  get: function get() {
    return _Nesting["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _Text = require("../Text");
var _Basic = _interopRequireDefault(require("./Basic"));
var _LineHeight = _interopRequireDefault(require("./LineHeight"));
var _Nesting = _interopRequireDefault(require("./Nesting"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Text.Text,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Text'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
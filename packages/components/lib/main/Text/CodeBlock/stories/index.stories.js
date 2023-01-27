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
Object.defineProperty(exports, "Border", {
  enumerable: true,
  get: function get() {
    return _Basic["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _CodeBlock = require("../CodeBlock");
var _Basic = _interopRequireDefault(require("./Basic"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _CodeBlock.CodeBlock,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/CodeBlock'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
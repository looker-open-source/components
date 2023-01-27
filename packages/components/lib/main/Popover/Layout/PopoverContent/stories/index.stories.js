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
Object.defineProperty(exports, "CustomPadding", {
  enumerable: true,
  get: function get() {
    return _CustomPadding["default"];
  }
});
Object.defineProperty(exports, "Scroll", {
  enumerable: true,
  get: function get() {
    return _Scroll["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _PopoverContent = require("../PopoverContent");
var _Basic = _interopRequireDefault(require("./Basic"));
var _CustomPadding = _interopRequireDefault(require("./CustomPadding"));
var _Scroll = _interopRequireDefault(require("./Scroll"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PopoverContent.PopoverContent,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/PopoverContent'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
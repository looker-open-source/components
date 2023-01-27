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
Object.defineProperty(exports, "FooterClose", {
  enumerable: true,
  get: function get() {
    return _FooterClose["default"];
  }
});
Object.defineProperty(exports, "FooterWithChildren", {
  enumerable: true,
  get: function get() {
    return _FooterWithChildren["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _PopoverFooter = require("../PopoverFooter");
var _Basic = _interopRequireDefault(require("./Basic"));
var _FooterClose = _interopRequireDefault(require("./FooterClose"));
var _FooterWithChildren = _interopRequireDefault(require("./FooterWithChildren"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PopoverFooter.PopoverFooter,
  title: 'Stories/PopoverFooter'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
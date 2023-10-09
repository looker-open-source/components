"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AlwaysVisible", {
  enumerable: true,
  get: function get() {
    return _AlwaysVisible["default"];
  }
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _Basic["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _PageSize = require("../PageSize");
var _AlwaysVisible = _interopRequireDefault(require("./AlwaysVisible"));
var _Basic = _interopRequireDefault(require("./Basic"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PageSize.PageSize,
  title: 'Stories/PageSize'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
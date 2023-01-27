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
Object.defineProperty(exports, "CustomReplace", {
  enumerable: true,
  get: function get() {
    return _CustomReplace["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _ReplaceText = require("../ReplaceText");
var _CustomReplace = _interopRequireDefault(require("./CustomReplace"));
var _Basic = _interopRequireDefault(require("./Basic"));

(0, _storybook.disableStoryshot)(_CustomReplace["default"]);
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _ReplaceText.ReplaceText,
  title: 'Stories/ReplaceText'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
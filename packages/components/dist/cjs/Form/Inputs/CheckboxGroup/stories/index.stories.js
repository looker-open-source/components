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
Object.defineProperty(exports, "Controlled", {
  enumerable: true,
  get: function get() {
    return _Controlled["default"];
  }
});
Object.defineProperty(exports, "DisabledGroup", {
  enumerable: true,
  get: function get() {
    return _DisabledGroup["default"];
  }
});
Object.defineProperty(exports, "DisabledItem", {
  enumerable: true,
  get: function get() {
    return _DisabledItem["default"];
  }
});
Object.defineProperty(exports, "Inline", {
  enumerable: true,
  get: function get() {
    return _Inline["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _CheckboxGroup = require("../CheckboxGroup");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Controlled = _interopRequireDefault(require("./Controlled"));
var _DisabledGroup = _interopRequireDefault(require("./DisabledGroup"));
var _DisabledItem = _interopRequireDefault(require("./DisabledItem"));
var _Inline = _interopRequireDefault(require("./Inline"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _CheckboxGroup.CheckboxGroup,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/CheckboxGroup'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
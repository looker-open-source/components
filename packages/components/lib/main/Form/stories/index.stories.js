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
Object.defineProperty(exports, "Validation", {
  enumerable: true,
  get: function get() {
    return _Validation["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _ = require("..");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Validation = _interopRequireDefault(require("./Validation"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.Form,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Form'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
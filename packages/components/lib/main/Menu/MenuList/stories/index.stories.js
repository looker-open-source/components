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
Object.defineProperty(exports, "Density", {
  enumerable: true,
  get: function get() {
    return _Density["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _MenuList = require("../MenuList");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Density = _interopRequireDefault(require("./Density"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _MenuList.MenuList,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/MenuList'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
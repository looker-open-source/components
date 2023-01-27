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
Object.defineProperty(exports, "Letter", {
  enumerable: true,
  get: function get() {
    return _Letter["default"];
  }
});
Object.defineProperty(exports, "Number", {
  enumerable: true,
  get: function get() {
    return _Number["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _OrderedList = require("../OrderedList");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Letter = _interopRequireDefault(require("./Letter"));
var _Number = _interopRequireDefault(require("./Number"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _OrderedList.OrderedList,
  title: 'Stories/OrderedList'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
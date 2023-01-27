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
Object.defineProperty(exports, "ClickAndDelete", {
  enumerable: true,
  get: function get() {
    return _ClickAndDelete["default"];
  }
});
Object.defineProperty(exports, "IconLabel", {
  enumerable: true,
  get: function get() {
    return _IconLabel["default"];
  }
});
Object.defineProperty(exports, "MaxWidth", {
  enumerable: true,
  get: function get() {
    return _MaxWidth["default"];
  }
});
Object.defineProperty(exports, "Prefix", {
  enumerable: true,
  get: function get() {
    return _Prefix["default"];
  }
});
Object.defineProperty(exports, "Removable", {
  enumerable: true,
  get: function get() {
    return _Removable["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _Chip = require("../Chip");
var _Basic = _interopRequireDefault(require("./Basic"));
var _ClickAndDelete = _interopRequireDefault(require("./ClickAndDelete"));
var _MaxWidth = _interopRequireDefault(require("./MaxWidth"));
var _Prefix = _interopRequireDefault(require("./Prefix"));
var _Removable = _interopRequireDefault(require("./Removable"));
var _IconLabel = _interopRequireDefault(require("./IconLabel"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Chip.Chip,
  title: 'Stories/Chip'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
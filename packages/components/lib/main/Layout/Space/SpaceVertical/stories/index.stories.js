"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VerticalBasic", {
  enumerable: true,
  get: function get() {
    return _VerticalBasic["default"];
  }
});
Object.defineProperty(exports, "VerticalGap", {
  enumerable: true,
  get: function get() {
    return _VerticalGap["default"];
  }
});
Object.defineProperty(exports, "VerticalProperties", {
  enumerable: true,
  get: function get() {
    return _VerticalProperties["default"];
  }
});
Object.defineProperty(exports, "VerticalReverse", {
  enumerable: true,
  get: function get() {
    return _VerticalReverse["default"];
  }
});
Object.defineProperty(exports, "VerticalStretch", {
  enumerable: true,
  get: function get() {
    return _VerticalStretch["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _ = require("..");
var _VerticalBasic = _interopRequireDefault(require("./VerticalBasic"));
var _VerticalGap = _interopRequireDefault(require("./VerticalGap"));
var _VerticalProperties = _interopRequireDefault(require("./VerticalProperties"));
var _VerticalReverse = _interopRequireDefault(require("./VerticalReverse"));
var _VerticalStretch = _interopRequireDefault(require("./VerticalStretch"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.SpaceVertical,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/SpaceVertical'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
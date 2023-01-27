"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Default", {
  enumerable: true,
  get: function get() {
    return _Default["default"];
  }
});
Object.defineProperty(exports, "DeterminateProgress", {
  enumerable: true,
  get: function get() {
    return _DeterminateProgress["default"];
  }
});
Object.defineProperty(exports, "Size", {
  enumerable: true,
  get: function get() {
    return _Size["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _ProgressCircular = require("../ProgressCircular");
var _Default = _interopRequireDefault(require("./Default"));
var _DeterminateProgress = _interopRequireDefault(require("./DeterminateProgress"));
var _Size = _interopRequireDefault(require("./Size"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _ProgressCircular.ProgressCircular,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/ProgressCircular'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
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
Object.defineProperty(exports, "ControlledColor", {
  enumerable: true,
  get: function get() {
    return _ControlledColor["default"];
  }
});
Object.defineProperty(exports, "DefaultValue", {
  enumerable: true,
  get: function get() {
    return _DefaultValue["default"];
  }
});
Object.defineProperty(exports, "Disabled", {
  enumerable: true,
  get: function get() {
    return _Disabled["default"];
  }
});
Object.defineProperty(exports, "DisabledNoValue", {
  enumerable: true,
  get: function get() {
    return _DisabledNoValue["default"];
  }
});
Object.defineProperty(exports, "ReadOnly", {
  enumerable: true,
  get: function get() {
    return _ReadOnly["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _InputColor = require("../InputColor");
var _ControlledColor = _interopRequireDefault(require("./ControlledColor"));
var _Basic = _interopRequireDefault(require("./Basic"));
var _DefaultValue = _interopRequireDefault(require("./DefaultValue"));
var _Disabled = _interopRequireDefault(require("./Disabled"));
var _DisabledNoValue = _interopRequireDefault(require("./DisabledNoValue"));
var _ReadOnly = _interopRequireDefault(require("./ReadOnly"));

_ControlledColor["default"].parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InputColor.InputColor,
  title: 'Stories/InputColor'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
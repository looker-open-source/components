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
Object.defineProperty(exports, "Controlled", {
  enumerable: true,
  get: function get() {
    return _Controlled["default"];
  }
});
Object.defineProperty(exports, "Disabled", {
  enumerable: true,
  get: function get() {
    return _Disabled["default"];
  }
});
Object.defineProperty(exports, "FloatingLabel", {
  enumerable: true,
  get: function get() {
    return _FloatingLabel["default"];
  }
});
Object.defineProperty(exports, "Required", {
  enumerable: true,
  get: function get() {
    return _Required["default"];
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
var _FieldColor = require("../../FieldColor");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Required = _interopRequireDefault(require("./Required"));
var _Disabled = _interopRequireDefault(require("./Disabled"));
var _FloatingLabel = _interopRequireDefault(require("./FloatingLabel"));
var _Controlled = _interopRequireDefault(require("./Controlled"));
var _Validation = _interopRequireDefault(require("./Validation"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldColor.FieldColor,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/FieldColor'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
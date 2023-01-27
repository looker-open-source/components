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
Object.defineProperty(exports, "Bold", {
  enumerable: true,
  get: function get() {
    return _Bold["default"];
  }
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function get() {
    return _Color["default"];
  }
});
Object.defineProperty(exports, "TextDecoration", {
  enumerable: true,
  get: function get() {
    return _TextDecoration["default"];
  }
});
Object.defineProperty(exports, "TextTransform", {
  enumerable: true,
  get: function get() {
    return _TextTransform["default"];
  }
});
Object.defineProperty(exports, "Wrapped", {
  enumerable: true,
  get: function get() {
    return _Wrapped["default"];
  }
});
Object.defineProperty(exports, "XXXXLarge", {
  enumerable: true,
  get: function get() {
    return _XXXXLarge["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _Span = require("../Span");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Bold = _interopRequireDefault(require("./Bold"));
var _Color = _interopRequireDefault(require("./Color"));
var _TextDecoration = _interopRequireDefault(require("./TextDecoration"));
var _TextTransform = _interopRequireDefault(require("./TextTransform"));
var _Wrapped = _interopRequireDefault(require("./Wrapped"));
var _XXXXLarge = _interopRequireDefault(require("./XXXXLarge"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Span.Span,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Span'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
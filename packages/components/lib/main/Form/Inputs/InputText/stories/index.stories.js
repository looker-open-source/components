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
Object.defineProperty(exports, "BeforeAfter", {
  enumerable: true,
  get: function get() {
    return _BeforeAfter["default"];
  }
});
Object.defineProperty(exports, "Disabled", {
  enumerable: true,
  get: function get() {
    return _Disabled["default"];
  }
});
Object.defineProperty(exports, "Error", {
  enumerable: true,
  get: function get() {
    return _Error["default"];
  }
});
Object.defineProperty(exports, "NoErrorIcon", {
  enumerable: true,
  get: function get() {
    return _NoErrorIcon["default"];
  }
});
Object.defineProperty(exports, "Placeholder", {
  enumerable: true,
  get: function get() {
    return _Placeholder["default"];
  }
});
Object.defineProperty(exports, "Value", {
  enumerable: true,
  get: function get() {
    return _Value["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _InputText = require("../InputText");
var _Basic = _interopRequireDefault(require("./Basic"));
var _BeforeAfter = _interopRequireDefault(require("./BeforeAfter"));
var _Placeholder = _interopRequireDefault(require("./Placeholder"));
var _Value = _interopRequireDefault(require("./Value"));
var _Disabled = _interopRequireDefault(require("./Disabled"));
var _Error = _interopRequireDefault(require("./Error"));
var _NoErrorIcon = _interopRequireDefault(require("./NoErrorIcon"));

(0, _storybook.disableStoryshot)(_Basic["default"]);
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InputText.InputText,
  title: 'Stories/InputText'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
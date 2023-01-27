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
Object.defineProperty(exports, "Disabled", {
  enumerable: true,
  get: function get() {
    return _Disabled["default"];
  }
});
Object.defineProperty(exports, "OverflowHiddenInlineInputText", {
  enumerable: true,
  get: function get() {
    return _OverflowHiddenInlineInputText["default"];
  }
});
Object.defineProperty(exports, "Placeholder", {
  enumerable: true,
  get: function get() {
    return _Placeholder["default"];
  }
});
Object.defineProperty(exports, "ReadOnly", {
  enumerable: true,
  get: function get() {
    return _ReadOnly["default"];
  }
});
Object.defineProperty(exports, "Simple", {
  enumerable: true,
  get: function get() {
    return _Simple["default"];
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
var _InlineInputText = require("../InlineInputText");
var _ReadOnly = _interopRequireDefault(require("./ReadOnly"));
var _OverflowHiddenInlineInputText = _interopRequireDefault(require("./OverflowHiddenInlineInputText"));
var _Basic = _interopRequireDefault(require("./Basic"));
var _Value = _interopRequireDefault(require("./Value"));
var _Placeholder = _interopRequireDefault(require("./Placeholder"));
var _Simple = _interopRequireDefault(require("./Simple"));
var _Disabled = _interopRequireDefault(require("./Disabled"));

(0, _storybook.disableStoryshot)(_ReadOnly["default"], _OverflowHiddenInlineInputText["default"]);
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InlineInputText.InlineInputText,
  title: 'Stories/InlineInputText'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
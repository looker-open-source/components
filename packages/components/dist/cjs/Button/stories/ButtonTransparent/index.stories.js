"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _Basic["default"];
  }
});
Object.defineProperty(exports, "Critical", {
  enumerable: true,
  get: function get() {
    return _Critical["default"];
  }
});
Object.defineProperty(exports, "Large", {
  enumerable: true,
  get: function get() {
    return _Large["default"];
  }
});
Object.defineProperty(exports, "Medium", {
  enumerable: true,
  get: function get() {
    return _Medium["default"];
  }
});
Object.defineProperty(exports, "Neutral", {
  enumerable: true,
  get: function get() {
    return _Neutral["default"];
  }
});
Object.defineProperty(exports, "Positive", {
  enumerable: true,
  get: function get() {
    return _Positive["default"];
  }
});
Object.defineProperty(exports, "Small", {
  enumerable: true,
  get: function get() {
    return _Small["default"];
  }
});
Object.defineProperty(exports, "XSmall", {
  enumerable: true,
  get: function get() {
    return _XSmall["default"];
  }
});
exports["default"] = void 0;
var _Positive = _interopRequireDefault(require("./Positive"));
var _Basic = _interopRequireDefault(require("./Basic"));
var _Critical = _interopRequireDefault(require("./Critical"));
var _Neutral = _interopRequireDefault(require("./Neutral"));
var _XSmall = _interopRequireDefault(require("./XSmall"));
var _Small = _interopRequireDefault(require("./Small"));
var _Medium = _interopRequireDefault(require("./Medium"));
var _Large = _interopRequireDefault(require("./Large"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_Positive["default"].parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    }
  },
  title: 'Stories/ButtonTransparent'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
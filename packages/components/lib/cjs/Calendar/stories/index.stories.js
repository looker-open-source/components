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
Object.defineProperty(exports, "Locale", {
  enumerable: true,
  get: function get() {
    return _Locale["default"];
  }
});
Object.defineProperty(exports, "ProviderLocale", {
  enumerable: true,
  get: function get() {
    return _ProviderLocale["default"];
  }
});
Object.defineProperty(exports, "Range", {
  enumerable: true,
  get: function get() {
    return _Range["default"];
  }
});
exports["default"] = void 0;

var _Basic = _interopRequireDefault(require("./Basic"));

var _Locale = _interopRequireDefault(require("./Locale"));

var _ProviderLocale = _interopRequireDefault(require("./ProviderLocale"));

var _Range = _interopRequireDefault(require("./Range"));

var _default = {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    },
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Calendar'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
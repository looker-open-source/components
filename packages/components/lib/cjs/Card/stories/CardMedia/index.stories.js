"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function get() {
    return _Color["default"];
  }
});
Object.defineProperty(exports, "Default", {
  enumerable: true,
  get: function get() {
    return _Default["default"];
  }
});
exports["default"] = void 0;

var _Default = _interopRequireDefault(require("./Default"));

var _Color = _interopRequireDefault(require("./Color"));

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
  title: 'Stories/CardMedia'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
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
Object.defineProperty(exports, "Detail", {
  enumerable: true,
  get: function get() {
    return _Detail["default"];
  }
});
Object.defineProperty(exports, "HideClose", {
  enumerable: true,
  get: function get() {
    return _HideClose["default"];
  }
});
exports["default"] = void 0;
var _Basic = _interopRequireDefault(require("./Basic"));
var _HideClose = _interopRequireDefault(require("./HideClose"));
var _Detail = _interopRequireDefault(require("./Detail"));
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
  title: 'Stories/Layout/DialogHeader'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
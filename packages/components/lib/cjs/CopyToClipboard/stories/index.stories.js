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
Object.defineProperty(exports, "ChildComponent", {
  enumerable: true,
  get: function get() {
    return _ChildComponent["default"];
  }
});
Object.defineProperty(exports, "Success", {
  enumerable: true,
  get: function get() {
    return _Success["default"];
  }
});
exports["default"] = void 0;

var _Basic = _interopRequireDefault(require("./Basic"));

var _Success = _interopRequireDefault(require("./Success"));

var _ChildComponent = _interopRequireDefault(require("./ChildComponent"));

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
  title: 'Stories/CopyToClipboard'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
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
Object.defineProperty(exports, "UsePrompt", {
  enumerable: true,
  get: function get() {
    return _UsePrompt["default"];
  }
});
exports["default"] = void 0;
var _Basic = _interopRequireDefault(require("./Basic"));
var _UsePrompt = _interopRequireDefault(require("./UsePrompt"));
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
  title: 'Stories/Prompt'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
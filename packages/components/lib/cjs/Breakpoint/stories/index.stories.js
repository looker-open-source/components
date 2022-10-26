"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Desktop", {
  enumerable: true,
  get: function get() {
    return _Desktop["default"];
  }
});
Object.defineProperty(exports, "DesktopXL", {
  enumerable: true,
  get: function get() {
    return _DesktopXL["default"];
  }
});
Object.defineProperty(exports, "MobileLaptop", {
  enumerable: true,
  get: function get() {
    return _MobileLaptop["default"];
  }
});
Object.defineProperty(exports, "XL", {
  enumerable: true,
  get: function get() {
    return _XL["default"];
  }
});
exports["default"] = void 0;

var _utilsStorybook = require("../../utils-storybook");

var _Desktop = _interopRequireDefault(require("./Desktop"));

var _DesktopXL = _interopRequireDefault(require("./DesktopXL"));

var _MobileLaptop = _interopRequireDefault(require("./MobileLaptop"));

var _XL = _interopRequireDefault(require("./XL"));

var _default = {
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true
      }
    },
    storyshots: {
      disable: true
    },
    viewport: {
      defaultViewport: 'desktop',
      viewports: _utilsStorybook.VIEWPORT_MAP
    }
  },
  title: 'Stories/Breakpoint'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
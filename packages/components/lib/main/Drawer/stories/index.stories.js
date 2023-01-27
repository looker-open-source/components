"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AnimationCallbacks", {
  enumerable: true,
  get: function get() {
    return _AnimationCallbacks["default"];
  }
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _Basic["default"];
  }
});
Object.defineProperty(exports, "Placement", {
  enumerable: true,
  get: function get() {
    return _Placement["default"];
  }
});
Object.defineProperty(exports, "UseDrawer", {
  enumerable: true,
  get: function get() {
    return _UseDrawer["default"];
  }
});
Object.defineProperty(exports, "Width", {
  enumerable: true,
  get: function get() {
    return _Width["default"];
  }
});
exports["default"] = void 0;
var _Basic = _interopRequireDefault(require("./Basic"));
var _AnimationCallbacks = _interopRequireDefault(require("./AnimationCallbacks"));
var _UseDrawer = _interopRequireDefault(require("./UseDrawer"));
var _Width = _interopRequireDefault(require("./Width"));
var _Placement = _interopRequireDefault(require("./Placement"));
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
  title: 'Stories/Drawer'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
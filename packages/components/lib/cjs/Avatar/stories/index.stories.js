"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AvatarAccessible", {
  enumerable: true,
  get: function get() {
    return _Accessible["default"];
  }
});
Object.defineProperty(exports, "AvatarButton", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
Object.defineProperty(exports, "AvatarColor", {
  enumerable: true,
  get: function get() {
    return _Color["default"];
  }
});
Object.defineProperty(exports, "AvatarCombo", {
  enumerable: true,
  get: function get() {
    return _Combo["default"];
  }
});
Object.defineProperty(exports, "AvatarIcon", {
  enumerable: true,
  get: function get() {
    return _Icon["default"];
  }
});
Object.defineProperty(exports, "AvatarSize", {
  enumerable: true,
  get: function get() {
    return _Size["default"];
  }
});
Object.defineProperty(exports, "AvatarUser", {
  enumerable: true,
  get: function get() {
    return _User["default"];
  }
});
exports["default"] = void 0;

var _Accessible = _interopRequireDefault(require("./Accessible"));

var _Button = _interopRequireDefault(require("./Button"));

var _User = _interopRequireDefault(require("./User"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Size = _interopRequireDefault(require("./Size"));

var _Color = _interopRequireDefault(require("./Color"));

var _Combo = _interopRequireDefault(require("./Combo"));

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
  title: 'Stories/Avatar'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
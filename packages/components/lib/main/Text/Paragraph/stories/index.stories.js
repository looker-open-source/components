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
Object.defineProperty(exports, "FontSize", {
  enumerable: true,
  get: function get() {
    return _FontSize["default"];
  }
});
Object.defineProperty(exports, "FontWeight", {
  enumerable: true,
  get: function get() {
    return _FontWeight["default"];
  }
});
Object.defineProperty(exports, "MultilineTruncate", {
  enumerable: true,
  get: function get() {
    return _MultilineTruncate["default"];
  }
});
Object.defineProperty(exports, "TextAlign", {
  enumerable: true,
  get: function get() {
    return _TextAlign["default"];
  }
});
Object.defineProperty(exports, "TextDecoration", {
  enumerable: true,
  get: function get() {
    return _TextDecoration["default"];
  }
});
Object.defineProperty(exports, "TextTransform", {
  enumerable: true,
  get: function get() {
    return _TextTransform["default"];
  }
});
Object.defineProperty(exports, "Truncate", {
  enumerable: true,
  get: function get() {
    return _Truncate["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _Paragraph = require("../Paragraph");
var _Default = _interopRequireDefault(require("./Default"));
var _Color = _interopRequireDefault(require("./Color"));
var _FontSize = _interopRequireDefault(require("./FontSize"));
var _FontWeight = _interopRequireDefault(require("./FontWeight"));
var _MultilineTruncate = _interopRequireDefault(require("./MultilineTruncate"));
var _TextAlign = _interopRequireDefault(require("./TextAlign"));
var _TextDecoration = _interopRequireDefault(require("./TextDecoration"));
var _TextTransform = _interopRequireDefault(require("./TextTransform"));
var _Truncate = _interopRequireDefault(require("./Truncate"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Paragraph.Paragraph,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Paragraph'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
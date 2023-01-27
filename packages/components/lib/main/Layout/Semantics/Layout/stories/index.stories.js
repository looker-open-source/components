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
Object.defineProperty(exports, "FixedWithFooterAndHeaderShadow", {
  enumerable: true,
  get: function get() {
    return _FixedWithFooterAndHeaderShadow["default"];
  }
});
Object.defineProperty(exports, "ScrollAllAreasTogetherDefault", {
  enumerable: true,
  get: function get() {
    return _ScrollAllAreasTogetherDefault["default"];
  }
});
Object.defineProperty(exports, "ScrollIndependently", {
  enumerable: true,
  get: function get() {
    return _ScrollIndependently["default"];
  }
});
Object.defineProperty(exports, "ScrollSelectedAreas", {
  enumerable: true,
  get: function get() {
    return _ScrollSelectedAreas["default"];
  }
});
Object.defineProperty(exports, "WhitespaceRepro", {
  enumerable: true,
  get: function get() {
    return _WhitespaceRepro["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _ = require("..");
var _Basic = _interopRequireDefault(require("./Basic"));
var _FixedWithFooterAndHeaderShadow = _interopRequireDefault(require("./FixedWithFooterAndHeaderShadow"));
var _ScrollAllAreasTogetherDefault = _interopRequireDefault(require("./ScrollAllAreasTogetherDefault"));
var _ScrollIndependently = _interopRequireDefault(require("./ScrollIndependently"));
var _ScrollSelectedAreas = _interopRequireDefault(require("./ScrollSelectedAreas"));
var _WhitespaceRepro = _interopRequireDefault(require("./WhitespaceRepro"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.Layout,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/Layout'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
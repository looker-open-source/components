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
Object.defineProperty(exports, "FooterCloseButton", {
  enumerable: true,
  get: function get() {
    return _FooterCloseButton["default"];
  }
});
Object.defineProperty(exports, "Full", {
  enumerable: true,
  get: function get() {
    return _Full["default"];
  }
});
Object.defineProperty(exports, "Header", {
  enumerable: true,
  get: function get() {
    return _Header["default"];
  }
});
Object.defineProperty(exports, "HeaderHideHeading", {
  enumerable: true,
  get: function get() {
    return _HeaderHideHeading["default"];
  }
});
Object.defineProperty(exports, "NoFooter", {
  enumerable: true,
  get: function get() {
    return _NoFooter["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _PopoverLayout = require("../PopoverLayout");
var _Basic = _interopRequireDefault(require("./Basic"));
var _FooterCloseButton = _interopRequireDefault(require("./FooterCloseButton"));
var _Full = _interopRequireDefault(require("./Full"));
var _Header = _interopRequireDefault(require("./Header"));
var _HeaderHideHeading = _interopRequireDefault(require("./HeaderHideHeading"));
var _NoFooter = _interopRequireDefault(require("./NoFooter"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PopoverLayout.PopoverLayout,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/PopoverLayout'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
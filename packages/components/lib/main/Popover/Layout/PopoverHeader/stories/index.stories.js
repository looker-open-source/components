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
Object.defineProperty(exports, "Hidden", {
  enumerable: true,
  get: function get() {
    return _Hidden["default"];
  }
});
Object.defineProperty(exports, "HideClose", {
  enumerable: true,
  get: function get() {
    return _HideClose["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _PopoverHeader = require("../PopoverHeader");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Detail = _interopRequireDefault(require("./Detail"));
var _Hidden = _interopRequireDefault(require("./Hidden"));
var _HideClose = _interopRequireDefault(require("./HideClose"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _PopoverHeader.PopoverHeader,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/PopoverHeader'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
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
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link["default"];
  }
});
Object.defineProperty(exports, "ParentIcon", {
  enumerable: true,
  get: function get() {
    return _ParentIcon["default"];
  }
});
exports["default"] = void 0;
var _storybook = require("@looker/storybook");
var _NavTree = require("../NavTree");
var _Basic = _interopRequireDefault(require("./Basic"));
var _Link = _interopRequireDefault(require("./Link"));
var _ParentIcon = _interopRequireDefault(require("./ParentIcon"));
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _NavTree.NavTree,
  parameters: {
    storyshots: {
      disable: true
    }
  },
  title: 'Stories/NavTree'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
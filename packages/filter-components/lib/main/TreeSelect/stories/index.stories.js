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
Object.defineProperty(exports, "WithoutDropdown", {
  enumerable: true,
  get: function get() {
    return _WithoutDropdown["default"];
  }
});
exports["default"] = void 0;
var _TreeSelect = require("../TreeSelect");
var _locales = require("../../locales");
var _Basic = _interopRequireDefault(require("./Basic"));
var _WithoutDropdown = _interopRequireDefault(require("./WithoutDropdown"));
var _default = {
  component: _TreeSelect.TreeSelect,
  parameters: {
    i18nResources: _locales.i18nResources,
    storyshots: {
      disable: true
    }
  },
  title: 'Filters/Stories/TreeSelect'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
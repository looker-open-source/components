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
exports["default"] = void 0;
var _FilterCollection = require("../FilterCollection");
var _locales = require("../../locales");
var _Basic = _interopRequireDefault(require("./Basic"));
var _default = {
  component: _FilterCollection.FilterCollection,
  parameters: {
    i18nResources: _locales.i18nResources,
    storyshots: {
      disable: true
    }
  },
  title: 'Filters/Stories/FilterCollection'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
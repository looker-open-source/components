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
Object.defineProperty(exports, "ExpressionOnChange", {
  enumerable: true,
  get: function get() {
    return _ExpressionOnChange["default"];
  }
});
Object.defineProperty(exports, "Required", {
  enumerable: true,
  get: function get() {
    return _Required["default"];
  }
});
Object.defineProperty(exports, "Suggestions", {
  enumerable: true,
  get: function get() {
    return _Suggestions["default"];
  }
});
exports["default"] = void 0;
var _DashboardFilter = require("../DashboardFilter");
var _locales = require("../../locales");
var _Basic = _interopRequireDefault(require("./Basic"));
var _ExpressionOnChange = _interopRequireDefault(require("./ExpressionOnChange"));
var _Suggestions = _interopRequireDefault(require("./Suggestions"));
var _Required = _interopRequireDefault(require("./Required"));
var _default = {
  component: _DashboardFilter.DashboardFilter,
  parameters: {
    i18nResources: _locales.i18nResources,
    storyshots: {
      disable: true
    }
  },
  title: 'Filters/Stories/DashboardFilter'
};
exports["default"] = _default;
//# sourceMappingURL=index.stories.js.map
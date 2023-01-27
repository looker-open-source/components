"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Basic", {
  enumerable: true,
  get: function get() {
    return _TableBasic["default"];
  }
});
Object.defineProperty(exports, "HorizontalScroll", {
  enumerable: true,
  get: function get() {
    return _TableHorizontalScroll["default"];
  }
});
Object.defineProperty(exports, "MultiSort", {
  enumerable: true,
  get: function get() {
    return _TableMultiSort["default"];
  }
});
Object.defineProperty(exports, "PivotedTable", {
  enumerable: true,
  get: function get() {
    return _TablePivot["default"];
  }
});
Object.defineProperty(exports, "TruncatedText", {
  enumerable: true,
  get: function get() {
    return _TableTruncatedText["default"];
  }
});
Object.defineProperty(exports, "WrappedText", {
  enumerable: true,
  get: function get() {
    return _TableWrappedText["default"];
  }
});
exports["default"] = void 0;
var _Visualization = require("../Visualization");
var _components = require("@looker/components");
var _TableWrappedText = _interopRequireDefault(require("./TableWrappedText"));
var _TableTruncatedText = _interopRequireDefault(require("./TableTruncatedText"));
var _TableBasic = _interopRequireDefault(require("./TableBasic"));
var _TableHorizontalScroll = _interopRequireDefault(require("./TableHorizontalScroll"));
var _TablePivot = _interopRequireDefault(require("./TablePivot"));
var _TableMultiSort = _interopRequireDefault(require("./TableMultiSort"));

_TableTruncatedText["default"].parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: _components.VIEWPORT_MAP
  }
};
_TableWrappedText["default"].parameters = {
  viewport: {
    defaultViewport: 'mobile',
    viewports: _components.VIEWPORT_MAP
  }
};
var _default = {
  component: _Visualization.Visualization,
  title: 'Visualizations/Stories/Table'
};
exports["default"] = _default;
//# sourceMappingURL=Table.stories.js.map
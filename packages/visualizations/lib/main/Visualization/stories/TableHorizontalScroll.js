"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HorizontalScroll;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _ = require("../");

function HorizontalScroll() {
  return _react["default"].createElement(_.Visualization, (0, _extends2["default"])({}, _visualizationsAdapters.mockPivotedQuery, {
    height: 600,
    config: {
      type: 'table',
      show_totals: true
    }
  }));
}
//# sourceMappingURL=TableHorizontalScroll.js.map
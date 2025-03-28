"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HorizontalScroll;
var _react = _interopRequireDefault(require("react"));
var _visualizationsAdapters = require("@looker/visualizations-adapters");
var _ = require("../");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HorizontalScroll() {
  return _react["default"].createElement(_.Visualization, _extends({}, _visualizationsAdapters.mockPivotedQuery, {
    height: 600,
    config: {
      type: 'table',
      show_totals: true
    }
  }));
}
//# sourceMappingURL=TableHorizontalScroll.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _DashboardFilter = require("../DashboardFilter");
var _excluded = ["filter"];
function Basic(_ref) {
  var _ref$filter = _ref.filter,
    filter = _ref$filter === void 0 ? {
      field: {
        is_numeric: true
      },
      id: '1',
      name: 'Cost',
      type: 'field_filter',
      allow_multiple_values: true
    } : _ref$filter,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_DashboardFilter.DashboardFilter, (0, _extends2["default"])({
    filter: filter
  }, props));
}
//# sourceMappingURL=Basic.js.map
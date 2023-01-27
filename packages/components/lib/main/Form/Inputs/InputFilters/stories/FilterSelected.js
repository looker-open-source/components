"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FilterSelected;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("..");
var _excluded = ["filters"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var filterWithValue = {
  field: 'status',
  formatValue: function formatValue(value) {
    return value.toUpperCase();
  },
  options: ['Failed', 'Success'],
  value: 'Success'
};
function FilterSelected(_ref) {
  var _ref$filters = _ref.filters,
    filtersProp = _ref$filters === void 0 ? [filterWithValue] : _ref$filters,
    args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useState = (0, _react.useState)(filtersProp),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    controlledFilters = _useState2[0],
    setControlledFilters = _useState2[1];
  return _react["default"].createElement(_.InputFilters, (0, _extends2["default"])({}, args, {
    filters: controlledFilters,
    onChange: setControlledFilters
  }));
}
//# sourceMappingURL=FilterSelected.js.map
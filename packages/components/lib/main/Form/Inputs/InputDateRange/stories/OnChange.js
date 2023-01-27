"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OnChange;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Layout = require("../../../../Layout");
var _DateFormat = require("../../DateFormat");
var _InputDateRange = require("../InputDateRange");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function OnChange() {
  var _useState = (0, _react.useState)({
      from: new Date(),
      to: new Date()
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selectedDate = _useState2[0],
    setSelectedDate = _useState2[1];
  var handleChange = function handleChange(dateRange) {
    setSelectedDate(dateRange);
  };
  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Layout.Space, {
    gap: "xsmall"
  }, _react["default"].createElement("strong", null, "Selected:"), _react["default"].createElement(_DateFormat.DateFormat, null, selectedDate.from), _react["default"].createElement("span", null, "\u2013"), _react["default"].createElement(_DateFormat.DateFormat, null, selectedDate.to)), _react["default"].createElement(_InputDateRange.InputDateRange, {
    onChange: handleChange,
    value: selectedDate
  }));
}
//# sourceMappingURL=OnChange.js.map
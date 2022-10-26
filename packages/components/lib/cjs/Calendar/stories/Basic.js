"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../..");

var _excluded = ["onSelectDate", "selectedDate", "viewMonth"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Basic(_ref) {
  var onSelectDate = _ref.onSelectDate,
      selectedDate = _ref.selectedDate,
      _ref$viewMonth = _ref.viewMonth,
      viewMonthProp = _ref$viewMonth === void 0 ? new Date('Jul 1, 2021') : _ref$viewMonth,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(selectedDate),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var handleSelect = function handleSelect(newDate) {
    onSelectDate === null || onSelectDate === void 0 ? void 0 : onSelectDate(newDate);
    setDate(newDate);
  };

  var _useState3 = (0, _react.useState)(viewMonthProp),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      viewMonth = _useState4[0],
      setViewMonth = _useState4[1];

  return _react["default"].createElement(_.Calendar, (0, _extends2["default"])({}, args, {
    onSelectDate: handleSelect,
    selectedDate: date,
    viewMonth: viewMonth,
    onMonthChange: setViewMonth
  }));
}
//# sourceMappingURL=Basic.js.map
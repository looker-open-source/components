"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Locale;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ko = _interopRequireDefault(require("date-fns/locale/ko"));

var _ = require("../..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Locale() {
  var initialDate = new Date('Jul 1, 2021');

  var _useState = (0, _react.useState)(initialDate),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = (0, _react.useState)(initialDate),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      viewMonth = _useState4[0],
      setViewMonth = _useState4[1];

  return _react["default"].createElement(_.Calendar, {
    onSelectDate: setDate,
    selectedDate: date,
    viewMonth: viewMonth,
    onMonthChange: setViewMonth,
    locale: _ko["default"]
  });
}
//# sourceMappingURL=Locale.js.map
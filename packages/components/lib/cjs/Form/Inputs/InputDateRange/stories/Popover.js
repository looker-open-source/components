"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../../../../..");

var _default = function _default() {
  var _React$useState = _react["default"].useState({
    from: new Date(2022, 1, 1),
    to: new Date(2022, 1, 2)
  }),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      selectedDateRange = _React$useState2[0],
      setSelectedDateRange = _React$useState2[1];

  return _react["default"].createElement(_.Popover, {
    content: _react["default"].createElement(_.Box2, {
      p: "u3"
    }, _react["default"].createElement(_.InputDateRange, {
      value: selectedDateRange,
      onChange: setSelectedDateRange
    }))
  }, _react["default"].createElement(_.Button, null, _react["default"].createElement(_.DateFormat, null, selectedDateRange.from), " \u2014", _react["default"].createElement(_.DateFormat, null, selectedDateRange.to)));
};

exports["default"] = _default;
//# sourceMappingURL=Popover.js.map
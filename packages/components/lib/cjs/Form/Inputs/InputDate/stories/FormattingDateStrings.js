"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _default = function _default() {
  return _react["default"].createElement(_.InputDate, {
    dateStringFormat: "MM-dd-y",
    defaultValue: new Date('February 3, 2009')
  });
};

exports["default"] = _default;
//# sourceMappingURL=FormattingDateStrings.js.map
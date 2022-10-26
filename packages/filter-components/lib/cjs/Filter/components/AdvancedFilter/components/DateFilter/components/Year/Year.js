"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Year = void 0;

var _react = _interopRequireDefault(require("react"));

var _GroupInput = require("../../../GroupInput");

var Year = function Year(_ref) {
  var _ref$item = _ref.item,
      id = _ref$item.id,
      year = _ref$item.year,
      onChange = _ref.onChange;

  var valueChange = function valueChange(e) {
    onChange(id, {
      year: e.target.value
    });
  };

  return _react["default"].createElement(_GroupInput.GroupInput, {
    onChange: valueChange,
    value: year,
    placement: "right"
  });
};

exports.Year = Year;
//# sourceMappingURL=Year.js.map
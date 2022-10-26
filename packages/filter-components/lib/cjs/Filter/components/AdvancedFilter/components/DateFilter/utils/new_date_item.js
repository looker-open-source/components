"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newDateItem = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _filterExpressions = require("@looker/filter-expressions");

var _excluded = ["value", "unit"];

var newDateItem = function newDateItem(_ref) {
  var value = _ref.value,
      unit = _ref.unit,
      restItem = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return (0, _filterExpressions.sanitizeDate)(restItem);
};

exports.newDateItem = newDateItem;
//# sourceMappingURL=new_date_item.js.map
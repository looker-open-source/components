"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemsFiller = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var Item = function Item(props) {
  return _react["default"].createElement(_.ListItem, props, "blah");
};

var ItemsFiller = function ItemsFiller(_ref) {
  var _ref$count = _ref.count,
      count = _ref$count === void 0 ? 10 : _ref$count;
  return _react["default"].createElement(_.List, null, (0, _toConsumableArray2["default"])(Array(count).keys()).map(function (key) {
    return _react["default"].createElement(Item, {
      key: key
    });
  }));
};

exports.ItemsFiller = ItemsFiller;
//# sourceMappingURL=ListHelper.js.map
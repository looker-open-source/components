"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChangeDirectionOrder;
var _react = _interopRequireDefault(require("react"));
var _ = require("../../..");

function ChangeDirectionOrder() {
  return _react["default"].createElement(_.Flex, null, _react["default"].createElement(_.Flex, {
    mr: "u5"
  }, _react["default"].createElement(_.FlexItem, null, "1\uFE0F\u20E3"), _react["default"].createElement(_.FlexItem, null, "2\uFE0F\u20E3"), _react["default"].createElement(_.FlexItem, null, "3\uFE0F\u20E3")), _react["default"].createElement(_.Flex, {
    flexDirection: "column",
    mr: "u5"
  }, _react["default"].createElement(_.FlexItem, null, "1\uFE0F\u20E3"), _react["default"].createElement(_.FlexItem, null, "2\uFE0F\u20E3"), _react["default"].createElement(_.FlexItem, null, "3\uFE0F\u20E3")), _react["default"].createElement(_.Flex, {
    flexDirection: "column-reverse",
    mr: "u5"
  }, _react["default"].createElement(_.FlexItem, null, "1\uFE0F\u20E3"), _react["default"].createElement(_.FlexItem, null, "2\uFE0F\u20E3"), _react["default"].createElement(_.FlexItem, null, "3\uFE0F\u20E3")), _react["default"].createElement(_.Flex, {
    flexDirection: "row-reverse",
    mr: "u5"
  }, _react["default"].createElement(_.FlexItem, null, "1\uFE0F\u20E3"), _react["default"].createElement(_.FlexItem, null, "2\uFE0F\u20E3"), _react["default"].createElement(_.FlexItem, null, "3\uFE0F\u20E3")));
}
//# sourceMappingURL=ChangeDirectionOrder.js.map
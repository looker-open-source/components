"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LongList;
var _react = _interopRequireDefault(require("react"));
var _2 = require("../");
var _3 = require("../../");

var array3000 = Array.from(Array(3000), function (_, i) {
  return String(i);
});
function LongList() {
  return _react["default"].createElement(_3.Space, {
    height: 300
  }, _react["default"].createElement(_2.List, {
    width: 200
  }, array3000.map(function (item, i) {
    return _react["default"].createElement(_3.ListItem, {
      key: i
    }, i > 0 && i % 30 === 0 ? 'Longlonglonglonglonglonglonglonglonglonglong' : item);
  })), _react["default"].createElement("div", null, "Without width on List, windowing plus variable item widths causes the layout to be unstable."));
}
//# sourceMappingURL=LongList.js.map
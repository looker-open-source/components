"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverflowExamples = void 0;

var _react = _interopRequireDefault(require("react"));

var _Layout = require("../../Layout");

var _ContentOverflow = require("./ContentOverflow");

var _EdgeOverflow = require("./EdgeOverflow");

var OverflowExamples = function OverflowExamples() {
  return _react["default"].createElement(_Layout.Box2, {
    p: "u10",
    width: "100%",
    position: "relative",
    height: "100%"
  }, _react["default"].createElement(_EdgeOverflow.EdgeOverflow, {
    top: 0,
    left: 0
  }, "Top Left"), _react["default"].createElement(_EdgeOverflow.EdgeOverflow, {
    top: 0,
    right: 0
  }, "Top Right"), _react["default"].createElement(_EdgeOverflow.EdgeOverflow, {
    bottom: 0,
    left: 0
  }, "Bottom Left"), _react["default"].createElement(_EdgeOverflow.EdgeOverflow, {
    bottom: 0,
    right: 0
  }, "Bottom Right"), _react["default"].createElement(_ContentOverflow.ContentOverflow, null, "Long popover content (placement ignore too)"), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."), _react["default"].createElement("p", null, "...."));
};

exports.OverflowExamples = OverflowExamples;
OverflowExamples.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=OverflowExamples.js.map
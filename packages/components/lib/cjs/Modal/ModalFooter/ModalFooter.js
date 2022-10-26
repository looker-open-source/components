"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Space = require("../../Layout/Space");

var _templateObject;

var _excluded = ["children", "secondary"];

var ModalFooterLayout = function ModalFooterLayout(_ref) {
  var children = _ref.children,
      secondary = _ref.secondary,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_Space.Space, (0, _extends2["default"])({
    as: "footer",
    reverse: true,
    between: true
  }, props), _react["default"].createElement(_Space.Space, {
    reverse: true
  }, children), secondary && _react["default"].createElement(_Space.Space, null, secondary));
};

var ModalFooter = (0, _styledComponents["default"])(ModalFooterLayout).withConfig({
  displayName: "ModalFooter",
  componentId: "sc-14cjxu-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  flex-shrink: 0;\n"])));
exports.ModalFooter = ModalFooter;
//# sourceMappingURL=ModalFooter.js.map
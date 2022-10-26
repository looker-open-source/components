"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MidInputLabel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _components = require("@looker/components");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _excluded = ["validationType"];

var _templateObject;

var MidInputLabel = (0, _styledComponents["default"])(function (_ref) {
  var validationType = _ref.validationType,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_components.Box2, (0, _extends2["default"])({
    alignItems: "center",
    alignSelf: "center",
    bg: "background",
    border: validationType === 'error' ? 'critical' : 'ui3',
    color: "text1",
    display: "flex",
    height: _components.inputHeight,
    lineHeight: "medium",
    px: "xsmall",
    textAlign: "right"
  }, props));
}).withConfig({
  displayName: "MidInputLabel",
  componentId: "sc-krsmua-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-right: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
exports.MidInputLabel = MidInputLabel;
//# sourceMappingURL=MidInputLabel.js.map
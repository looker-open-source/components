"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalHeader = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Space = require("../../Layout/Space");

var _Text = require("../../Text");

var _templateObject, _templateObject2;

var _excluded = ["children", "detail", "fontSize", "fontWeight", "id"];

var ModalHeaderLayout = function ModalHeaderLayout(_ref) {
  var children = _ref.children,
      detail = _ref.detail,
      fontSize = _ref.fontSize,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === void 0 ? 'semiBold' : _ref$fontWeight,
      id = _ref.id,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_Space.Space, (0, _extends2["default"])({
    as: "header",
    between: true,
    "aria-labelledby": id
  }, props), _react["default"].createElement(_Text.Heading, {
    as: "h3",
    fontSize: fontSize,
    fontWeight: fontWeight,
    id: id,
    mr: "xlarge",
    truncate: true
  }, children), detail && _react["default"].createElement(Detail, null, detail));
};

var Detail = _styledComponents["default"].div.withConfig({
  displayName: "ModalHeader__Detail",
  componentId: "sc-uszbz0-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: -", ";\n  margin-top: -", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u2;
});

var ModalHeader = (0, _styledComponents["default"])(ModalHeaderLayout).withConfig({
  displayName: "ModalHeader",
  componentId: "sc-uszbz0-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])([""])));
exports.ModalHeader = ModalHeader;
//# sourceMappingURL=ModalHeader.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Space = require("../../Layout/Space");
var _Text = require("../../Text");
var _templateObject, _templateObject2;
var _excluded = ["children", "detail", "fontSize", "fontWeight", "id"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ModalHeaderLayout = function ModalHeaderLayout(_ref) {
  var children = _ref.children,
    detail = _ref.detail,
    fontSize = _ref.fontSize,
    _ref$fontWeight = _ref.fontWeight,
    fontWeight = _ref$fontWeight === void 0 ? 'semiBold' : _ref$fontWeight,
    id = _ref.id,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(_Space.Space, _extends({
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: -", ";\n  margin-top: -", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.u2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u2;
});
var ModalHeader = (0, _styledComponents["default"])(ModalHeaderLayout).withConfig({
  displayName: "ModalHeader",
  componentId: "sc-uszbz0-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.ModalHeader = ModalHeader;
//# sourceMappingURL=ModalHeader.js.map
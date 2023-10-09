"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Space = require("../../Layout/Space");
var _templateObject;
var _excluded = ["children", "secondary"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ModalFooterLayout = function ModalFooterLayout(_ref) {
  var children = _ref.children,
    secondary = _ref.secondary,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement(_Space.Space, _extends({
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n"])));
exports.ModalFooter = ModalFooter;
//# sourceMappingURL=ModalFooter.js.map
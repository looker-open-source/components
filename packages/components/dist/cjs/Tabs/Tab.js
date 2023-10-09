"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Tab = require("../Tabs2/Tab2");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Tab = (0, _styledComponents["default"])(function (props) {
  return _react["default"].createElement(_Tab.Tab2, _extends({
    label: " "
  }, props));
}).withConfig({
  displayName: "Tab",
  componentId: "sc-eojndt-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Tab = Tab;
//# sourceMappingURL=Tab.js.map
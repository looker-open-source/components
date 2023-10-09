"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabel = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Fieldset = require("../../../Fieldset");
var _VisuallyHidden = require("../../../VisuallyHidden");
var _Label = require("../../Label");
var _RequiredStar = require("./RequiredStar");
var _excluded = ["ariaLabelOnly", "hideLabel", "id", "label", "required"];
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var FieldLabel = (0, _styledComponents["default"])(function (_ref) {
  var ariaLabelOnly = _ref.ariaLabelOnly,
    hideLabel = _ref.hideLabel,
    id = _ref.id,
    label = _ref.label,
    required = _ref.required,
    props = _objectWithoutProperties(_ref, _excluded);
  if (!label) return null;
  var _useContext = (0, _react.useContext)(_Fieldset.FieldsetContext),
    fieldsHideLabel = _useContext.fieldsHideLabel;
  var shouldHideLabel = (fieldsHideLabel || hideLabel) && hideLabel !== false;
  var labelComponent = _react["default"].createElement(_Label.Label, _extends({
    htmlFor: ariaLabelOnly ? undefined : id,
    id: "labelledby-".concat(id)
  }, props), label, required && _react["default"].createElement(_RequiredStar.RequiredStar, null));
  return shouldHideLabel ? _react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, labelComponent) : labelComponent;
}).withConfig({
  displayName: "FieldLabel",
  componentId: "sc-y1qssl-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.FieldLabel = FieldLabel;
//# sourceMappingURL=FieldLabel.js.map
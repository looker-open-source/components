"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldLabel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Fieldset = require("../../Fieldset");

var _VisuallyHidden = require("../../../VisuallyHidden");

var _Label = require("../../Label");

var _RequiredStar = require("./RequiredStar");

var _excluded = ["ariaLabelOnly", "hideLabel", "id", "label", "required"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldLabel = (0, _styledComponents["default"])(function (_ref) {
  var ariaLabelOnly = _ref.ariaLabelOnly,
      hideLabel = _ref.hideLabel,
      id = _ref.id,
      label = _ref.label,
      required = _ref.required,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  if (!label) return null;

  var _useContext = (0, _react.useContext)(_Fieldset.FieldsetContext),
      fieldsHideLabel = _useContext.fieldsHideLabel;

  var shouldHideLabel = (fieldsHideLabel || hideLabel) && hideLabel !== false;

  var labelComponent = _react["default"].createElement(_Label.Label, (0, _extends2["default"])({
    htmlFor: ariaLabelOnly ? undefined : id,
    id: "labelledby-".concat(id)
  }, props), label, required && _react["default"].createElement(_RequiredStar.RequiredStar, null));

  return shouldHideLabel ? _react["default"].createElement(_VisuallyHidden.VisuallyHidden, null, labelComponent) : labelComponent;
}).withConfig({
  displayName: "FieldLabel",
  componentId: "sc-y1qssl-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldLabel = FieldLabel;
//# sourceMappingURL=FieldLabel.js.map
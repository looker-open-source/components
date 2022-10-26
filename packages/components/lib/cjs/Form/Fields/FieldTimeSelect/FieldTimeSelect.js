"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldTimeSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _Field = require("../Field");

var _useFloatingLabel = require("../Field/useFloatingLabel");

var _Form = require("../../Form");

var _Tooltip = require("../../../Tooltip");

var _utils = require("../../../utils");

var _InputTimeSelect = require("../../Inputs/InputTimeSelect");

var _VisuallyHidden = require("../../../VisuallyHidden");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldTimeSelect = (0, _styledComponents["default"])((0, _react.forwardRef)(function (props, ref) {
  var validationMessage = (0, _Form.useFormContext)(props);
  var id = (0, _utils.useID)(props.id);
  var fieldProps = (0, _omit["default"])((0, _Field.omitFieldProps)(props), ['onChange']);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      formatError = _useState2[0],
      setFormatError = _useState2[1];

  var _useTranslation = (0, _utils.useTranslation)('FieldTimeSelect'),
      t = _useTranslation.t;

  var onChange = function onChange(value) {
    props.onChange && props.onChange(value);

    if (value) {
      setFormatError('');
    } else {
      setFormatError(t('Please use format HHMM'));
    }
  };

  var onBlur = function onBlur() {
    setFormatError('');
  };

  var errorMessage = formatError ? {
    message: formatError,
    type: 'error'
  } : validationMessage;
  return _react["default"].createElement(_Field.FloatingLabelField, (0, _extends2["default"])({
    "data-testid": "FieldSelectMultiId"
  }, (0, _Field.pickFieldProps)(props), {
    id: id,
    hasValue: (0, _useFloatingLabel.getHasValue)(props)
  }), _react["default"].createElement(_Tooltip.Tooltip, {
    placement: "top-end",
    content: formatError,
    isOpen: true,
    canClose: function canClose() {
      return false;
    }
  }, _react["default"].createElement("div", null, _react["default"].createElement(_VisuallyHidden.VisuallyHidden, {
    "aria-live": "polite"
  }, formatError), _react["default"].createElement(_InputTimeSelect.InputTimeSelect, (0, _extends2["default"])({}, fieldProps, {
    "aria-labelledby": "labelledby-".concat(id),
    id: id,
    validationType: errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.type,
    ref: ref,
    onChange: onChange,
    onBlur: onBlur
  })))));
})).withConfig({
  displayName: "FieldTimeSelect",
  componentId: "sc-18cfbnj-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldTimeSelect = FieldTimeSelect;
//# sourceMappingURL=FieldTimeSelect.js.map
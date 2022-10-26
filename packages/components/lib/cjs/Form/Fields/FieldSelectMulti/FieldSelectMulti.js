"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSelectMulti = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _Form = require("../../Form");

var _SelectMulti = require("../../Inputs/Select/SelectMulti");

var _Field = require("../Field");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getHasValue = function getHasValue(_ref) {
  var values = _ref.values,
      defaultValues = _ref.defaultValues;
  if (values !== undefined) return values.length > 0;
  if (defaultValues !== undefined) return defaultValues.length > 0;
  return false;
};

var checkValueOnBlur = function checkValueOnBlur(e) {
  var target = e.currentTarget;
  var options = target.querySelectorAll('[role="option"]');
  return options.length !== 0;
};

var FieldSelectMultiComponent = (0, _react.forwardRef)(function (props, ref) {
  var validationMessage = (0, _Form.useFormContext)(props);
  var id = (0, _utils.useID)(props.id);
  return _react["default"].createElement(_Field.FloatingLabelField, (0, _extends2["default"])({
    "data-testid": "FieldSelectMultiId"
  }, (0, _Field.pickFieldProps)(props), {
    id: id,
    ariaLabelOnly: true,
    validationMessage: validationMessage,
    hasValue: getHasValue(props),
    checkValueOnBlur: checkValueOnBlur
  }), _react["default"].createElement(_SelectMulti.SelectMulti, (0, _extends2["default"])({}, (0, _Field.omitFieldProps)(props), {
    "aria-describedby": "describedby-".concat(id),
    "aria-labelledby": "labelledby-".concat(id),
    id: id,
    validationType: validationMessage && validationMessage.type,
    ref: ref
  })));
});
FieldSelectMultiComponent.displayName = 'FieldSelectMultiComponent';
var FieldSelectMulti = (0, _styledComponents["default"])(FieldSelectMultiComponent).withConfig({
  displayName: "FieldSelectMulti",
  componentId: "sc-ze3grr-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n"])));
exports.FieldSelectMulti = FieldSelectMulti;
//# sourceMappingURL=FieldSelectMulti.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldSlider = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _utils = require("../../../utils");

var _Slider = require("../../Inputs/Slider");

var _Field = require("../Field");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FieldSliderComponent = (0, _react.forwardRef)(function (props, ref) {
  var id = (0, _utils.useID)(props.id);
  return _react["default"].createElement(_Field.Field, (0, _extends2["default"])({
    "data-testid": "FieldSliderId"
  }, (0, _Field.pickFieldProps)((0, _omit["default"])(props, 'validationMessage')), {
    id: id
  }), _react["default"].createElement(_Slider.Slider, (0, _extends2["default"])({}, (0, _Field.omitFieldProps)(props), {
    "aria-describedby": "describedby-".concat(id),
    id: id,
    ref: ref
  })));
});
FieldSliderComponent.displayName = 'FieldSliderComponent';
var FieldSlider = (0, _styledComponents["default"])(FieldSliderComponent).withConfig({
  displayName: "FieldSlider",
  componentId: "sc-u2l8no-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.FieldSlider = FieldSlider;
//# sourceMappingURL=FieldSlider.js.map
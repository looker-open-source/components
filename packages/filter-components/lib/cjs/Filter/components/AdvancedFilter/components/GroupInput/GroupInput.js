"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GroupInput = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _filter_styles = require("../../../../utils/filter_styles");

var _templateObject;

var _excluded = ["type", "width"];

var InputLayout = function InputLayout(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'number' : _ref$type,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '80px' : _ref$width,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var inputValidator = function inputValidator(evt) {
    if (evt.target && evt.currentTarget.value) {
      evt.currentTarget.value = evt.currentTarget.value.toString().replace(/\D/g, '');
    }
  };

  return _react["default"].createElement(_components.InputText, (0, _extends2["default"])({
    autoResize: true,
    onInput: inputValidator,
    type: type
  }, (0, _omit["default"])(props, 'placement')));
};

var GroupInput = (0, _styledComponents["default"])(InputLayout).attrs(function (_ref2) {
  var _ref2$placement = _ref2.placement,
      placement = _ref2$placement === void 0 ? 'middle' : _ref2$placement;
  return {
    placement: placement
  };
}).withConfig({
  displayName: "GroupInput",
  componentId: "sc-rdk5zh-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  input {\n    text-align: right;\n  }\n"])), _filter_styles.inputPlacementStyle);
exports.GroupInput = GroupInput;
//# sourceMappingURL=GroupInput.js.map
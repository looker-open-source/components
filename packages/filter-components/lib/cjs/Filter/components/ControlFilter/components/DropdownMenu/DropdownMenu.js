"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenu = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _components = require("@looker/components");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _filter_styles = require("../../../../utils/filter_styles");

var _use_option_filtering = require("../../../../utils/use_option_filtering");

var _use_placeholder = require("../../../../utils/use_placeholder");

var _templateObject, _templateObject2;

var _excluded = ["value", "options", "onChange", "onInputChange", "anyOption", "validationMessage"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DropdownMenuComponent = function DropdownMenuComponent(_ref) {
  var value = _ref.value,
      options = _ref.options,
      onChange = _ref.onChange,
      onInputChange = _ref.onInputChange,
      anyOption = _ref.anyOption,
      validationMessage = _ref.validationMessage,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useOptionFiltering = (0, _use_option_filtering.useOptionFiltering)({
    value: value,
    options: options,
    onInputChange: onInputChange
  }),
      filteredOptions = _useOptionFiltering.filteredOptions,
      noOptionsLabel = _useOptionFiltering.noOptionsLabel,
      onFilter = _useOptionFiltering.onFilter;

  var placeholderProps = (0, _use_placeholder.usePlaceholder)(value, validationMessage);
  return _react["default"].createElement(_components.Select, (0, _extends2["default"])({}, props, placeholderProps, {
    options: filteredOptions,
    noOptionsLabel: noOptionsLabel,
    isClearable: anyOption,
    value: value,
    onChange: onChange,
    isFilterable: true,
    onFilter: onFilter,
    minWidth: "12rem",
    maxWidth: "20rem",
    autoResize: true,
    listLayout: {
      maxWidth: ['95vw', '90vw', '80vw', '65vw', '50vw'],
      width: 'auto'
    },
    noErrorIcon: true,
    validationType: validationMessage === null || validationMessage === void 0 ? void 0 : validationMessage.type
  }));
};

var DropdownMenu = (0, _styledComponents["default"])(DropdownMenuComponent).withConfig({
  displayName: "DropdownMenu",
  componentId: "sc-12r3rn4-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    ", "\n    ", "\n  }\n"])), _components.InputText, _filter_styles.tokenStylePlaceholder, function (_ref2) {
  var tokenStyle = _ref2.tokenStyle,
      value = _ref2.value;
  return value !== '' && tokenStyle ? (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n            background-color: ", ";\n            color: ", ";\n            &:not(:focus-within) {\n              border-color: ", ";\n            }\n            &:hover {\n              border: 1px solid ", ";\n            }\n          "])), function (_ref3) {
    var theme = _ref3.theme;
    return theme.colors.keyAccent;
  }, function (_ref4) {
    var theme = _ref4.theme;
    return theme.colors.text5;
  }, function (_ref5) {
    var theme = _ref5.theme;
    return theme.colors.ui2;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.keyInteractive;
  }) : '';
});
exports.DropdownMenu = DropdownMenu;
//# sourceMappingURL=DropdownMenu.js.map
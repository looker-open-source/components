"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectOptionsContext = exports.SelectOptions = exports.SelectOptionWithDescription = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Icon = require("../../../../Icon");
var _Spinner = require("../../../../Spinner");
var _ListDivider = require("../../../../List/ListDivider");
var _ListItemPreface = require("../../../../ListItem/ListItemPreface");
var _Text = require("../../../../Text");
var _utils = require("../../../../utils");
var _Combobox = require("../../Combobox");
var _options = require("../utils/options");
var _useWindowedOptions2 = require("../utils/useWindowedOptions");
var _SelectOptionDetail = require("./SelectOptionDetail");
var _templateObject, _templateObject2;
var _excluded = ["description", "detail", "preface"],
  _excluded2 = ["option"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SelectOptionsContext = (0, _react.createContext)({
  hasIcons: false
});
exports.SelectOptionsContext = SelectOptionsContext;
var OptionLayoutBase = function OptionLayoutBase(_ref) {
  var isMulti = _ref.isMulti,
    option = _ref.option,
    scrollIntoView = _ref.scrollIntoView;
  var description = option.description,
    detail = option.detail,
    preface = option.preface,
    rest = _objectWithoutProperties(option, _excluded);
  var Component = isMulti ? _Combobox.ComboboxMultiOption : _Combobox.ComboboxOption;
  if (description || detail || preface) {
    return _react["default"].createElement(Component, _extends({}, rest, {
      py: preface || description ? 'xsmall' : 'xxsmall',
      scrollIntoView: scrollIntoView
    }), _react["default"].createElement(SelectOptionWithDescription, _extends({
      description: description,
      preface: preface
    }, rest)), detail && _react["default"].createElement(_SelectOptionDetail.SelectOptionDetail, null, detail));
  }
  return _react["default"].createElement(Component, rest);
};
var OptionIcon = function OptionIcon(_ref2) {
  var preface = _ref2.preface,
    icon = _ref2.icon;
  return icon ? _react["default"].createElement(_Icon.Icon, {
    size: "small",
    mt: preface ? 'medium' : 'none',
    color: "text1",
    icon: icon,
    "data-testid": "option-icon"
  }) : null;
};
var OptionLayout = function OptionLayout(_ref3) {
  var option = _ref3.option,
    rest = _objectWithoutProperties(_ref3, _excluded2);
  var _useContext = (0, _react.useContext)(SelectOptionsContext),
    hasIcons = _useContext.hasIcons;
  var _useContext2 = (0, _react.useContext)(_Combobox.ComboboxContext),
    indicatorPropRef = _useContext2.indicatorPropRef;
  var iconPlaceholder = hasIcons ? _react["default"].createElement(_Icon.IconPlaceholder, {
    mr: "xsmall",
    size: "small",
    "data-testid": "option-icon-placeholder"
  }) : undefined;
  var indicator = option.icon ? _react["default"].createElement(OptionIcon, option) : option.indicator || (indicatorPropRef === null || indicatorPropRef === void 0 ? void 0 : indicatorPropRef.current) || iconPlaceholder;
  (0, _react.useEffect)(function () {
    if (option.icon && option.indicator) {
      console.warn('Use icon or indicator but not both at the same time.');
    }
  }, [option.icon, option.indicator]);
  return _react["default"].createElement(OptionLayoutBase, _extends({}, rest, {
    option: _objectSpread(_objectSpread({}, option), {}, {
      indicator: indicator
    })
  }));
};
var MultiOptionLayout = function MultiOptionLayout(props) {
  return _react["default"].createElement(OptionLayoutBase, _extends({}, props, {
    isMulti: true
  }));
};
var SelectOptionWithDescription = function SelectOptionWithDescription(_ref4) {
  var description = _ref4.description,
    preface = _ref4.preface;
  return description || preface ? _react["default"].createElement("div", null, preface && _react["default"].createElement(_ListItemPreface.ListItemPreface, null, preface), _react["default"].createElement(_Text.Paragraph, {
    fontSize: "small",
    lineHeight: "small"
  }, _react["default"].createElement(_Combobox.ComboboxOptionText, null)), description && _react["default"].createElement(_Text.Paragraph, {
    color: "text2",
    fontSize: "xsmall",
    lineHeight: "xsmall"
  }, description)) : _react["default"].createElement(_Combobox.ComboboxOptionText, null);
};
exports.SelectOptionWithDescription = SelectOptionWithDescription;
var SelectOptionGroupTitle = (0, _styledComponents["default"])(_Text.Heading).attrs(function () {
  return {
    color: 'text3',
    fontFamily: 'body',
    fontSize: 'xxsmall',
    fontWeight: 'semiBold',
    px: 'u2',
    py: 'u1'
  };
}).withConfig({
  displayName: "SelectOptions__SelectOptionGroupTitle",
  componentId: "sc-6v9k5p-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  padding-top: ", ";\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.space.u1;
});
var SelectOptions = function SelectOptions(props) {
  var _useTranslation = (0, _utils.useTranslation)('SelectOptions'),
    t = _useTranslation.t;
  var noOptionsLabelText = t('No options');
  var flatOptions = props.flatOptions,
    navigationOptions = props.navigationOptions,
    isFilterable = props.isFilterable,
    showCreate = props.showCreate,
    formatCreateLabel = props.formatCreateLabel,
    isMulti = props.isMulti,
    _props$noOptionsLabel = props.noOptionsLabel,
    noOptionsLabel = _props$noOptionsLabel === void 0 ? noOptionsLabelText : _props$noOptionsLabel,
    windowing = props.windowing,
    isLoading = props.isLoading;
  var _useWindowedOptions = (0, _useWindowedOptions2.useWindowedOptions)(windowing, flatOptions, navigationOptions, isMulti),
    start = _useWindowedOptions.start,
    end = _useWindowedOptions.end,
    before = _useWindowedOptions.before,
    after = _useWindowedOptions.after,
    scrollTo = _useWindowedOptions.scrollTo;
  var keyPrefix = (0, _utils.useID)(flatOptions === null || flatOptions === void 0 ? void 0 : flatOptions.length.toString());
  var hasIcons = (0, _react.useMemo)(function () {
    return (0, _options.optionsHaveIcons)(navigationOptions);
  }, [navigationOptions]);
  if (isLoading) {
    return _react["default"].createElement(EmptyListItem, null, _react["default"].createElement(_Spinner.Spinner, {
      size: 30,
      "aria-label": t('Loading')
    }));
  }
  var optionsToRender = flatOptions ? flatOptions.slice(start, end + 1) : [];
  var noOptions = _react["default"].createElement(EmptyListItem, null, _react["default"].createElement(_Text.Text, {
    color: "text3"
  }, noOptionsLabel));
  var createOption = isFilterable && showCreate && _react["default"].createElement(SelectCreateOption, {
    options: navigationOptions,
    formatLabel: formatCreateLabel,
    noOptions: noOptions,
    isMulti: isMulti,
    key: "create"
  });
  return _react["default"].createElement(SelectOptionsContext.Provider, {
    value: {
      hasIcons: hasIcons
    }
  }, scrollTo, before, optionsToRender && optionsToRender.length > 0 ? [].concat(_toConsumableArray(optionsToRender.map(function (option, index) {
    var key = "".concat(keyPrefix, "-").concat(start + index);
    if (option.value !== undefined) {
      var OptionLayoutToUse = isMulti ? MultiOptionLayout : OptionLayout;
      return _react["default"].createElement(OptionLayoutToUse, {
        option: option,
        key: key
      });
    } else if (option.label !== undefined) {
      return _react["default"].createElement(SelectOptionGroupTitle, {
        isMulti: isMulti,
        key: key
      }, _react["default"].createElement(_Combobox.ComboboxOptionIndicator, {
        indicator: isMulti && ' '
      }), option.label);
    }
    return _react["default"].createElement(_ListDivider.ListDivider, {
      key: key
    });
  })), [createOption]) : createOption || noOptions, after);
};
exports.SelectOptions = SelectOptions;
var SelectCreateOption = function SelectCreateOption(_ref6) {
  var options = _ref6.options,
    noOptions = _ref6.noOptions,
    formatLabel = _ref6.formatLabel,
    isMulti = _ref6.isMulti;
  var _useContext3 = (0, _react.useContext)(_Combobox.ComboboxContext),
    data = _useContext3.data;
  var _useContext4 = (0, _react.useContext)(_Combobox.ComboboxMultiContext),
    dataMulti = _useContext4.data;
  var inputValue = isMulti ? dataMulti.inputValue : data.inputValue;
  var shouldShow = (0, _react.useMemo)(function () {
    var currentOptions = [];
    if (isMulti) {
      currentOptions = dataMulti.options;
    } else if (data.option) {
      currentOptions = [data.option];
    }
    return (0, _options.notInOptions)(currentOptions, options, inputValue);
  }, [isMulti, data.option, dataMulti.options, options, inputValue]);
  if (!shouldShow || !inputValue) {
    if (!options || options.length === 0) return _react["default"].createElement(_react["default"].Fragment, null, noOptions);
    return null;
  }
  var OptionComponent = isMulti ? _Combobox.ComboboxMultiOption : _Combobox.ComboboxOption;
  return _react["default"].createElement(OptionComponent, {
    value: inputValue,
    highlightText: false,
    indicator: false
  }, formatLabel ? formatLabel(inputValue) : "Create \"".concat(inputValue, "\""));
};
var EmptyListItem = _styledComponents["default"].li.withConfig({
  displayName: "SelectOptions__EmptyListItem",
  componentId: "sc-6v9k5p-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  padding: ", ";\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return "".concat(theme.space.u8, " ").concat(theme.space.u4);
});
//# sourceMappingURL=SelectOptions.js.map
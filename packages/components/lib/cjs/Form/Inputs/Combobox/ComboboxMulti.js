"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxMultiInternal = exports.ComboboxMulti = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _every = _interopRequireDefault(require("lodash/every"));

var _isMatch = _interopRequireDefault(require("lodash/isMatch"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../utils");

var _useFocusManagement = require("./utils/useFocusManagement");

var _state = require("./utils/state");

var _ComboboxContext = require("./ComboboxContext");

var _Combobox = require("./Combobox");

var _useComboboxRefs2 = require("./utils/useComboboxRefs");

var _useComboboxToggle = require("./utils/useComboboxToggle");

var _useScrollState = require("./utils/useScrollState");

var _templateObject;

var _excluded = ["openOnFocus", "openOnClick", "onChange", "values", "defaultValues", "onClose", "onOpen", "id"],
    _excluded2 = ["ref"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function compareOptions(optionsA, optionsB) {
  return (0, _every["default"])(optionsA, function (optionA) {
    return optionsB.find(function (optionB) {
      return (0, _isMatch["default"])(optionA, optionB);
    });
  });
}

var ComboboxMultiInternal = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var _ref$openOnFocus = _ref.openOnFocus,
      openOnFocus = _ref$openOnFocus === void 0 ? false : _ref$openOnFocus,
      _ref$openOnClick = _ref.openOnClick,
      openOnClick = _ref$openOnClick === void 0 ? true : _ref$openOnClick,
      onChange = _ref.onChange,
      values = _ref.values,
      defaultValues = _ref.defaultValues,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      propsID = _ref.id,
      rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var initialValues = values || defaultValues;
  var initialData = {
    options: initialValues || []
  };

  var _useReducerMachine = (0, _state.useReducerMachine)(_state.reducerMulti, _objectSpread(_objectSpread({}, _ComboboxContext.defaultMultiData), initialData), {
    inputValues: [],
    options: []
  }),
      _useReducerMachine2 = (0, _slicedToArray2["default"])(_useReducerMachine, 3),
      state = _useReducerMachine2[0],
      data = _useReducerMachine2[1],
      transition = _useReducerMachine2[2];

  var lastActionType = data.lastActionType,
      options = data.options;

  if (values !== undefined && (options.length !== values.length || !compareOptions(options, values))) {
    transition && transition(_state.ComboboxActionType.SELECT_SILENT, {
      options: values
    });
  }

  var focusManagement = (0, _useFocusManagement.useFocusManagement)(lastActionType);
  var id = (0, _utils.useID)(propsID);
  var isVisible = (0, _useComboboxToggle.useComboboxToggle)(state, options, onOpen, onClose);

  var _useComboboxRefs = (0, _useComboboxRefs2.useComboboxRefs)(forwardedRef),
      ref = _useComboboxRefs.ref,
      commonRefs = (0, _objectWithoutProperties2["default"])(_useComboboxRefs, _excluded2);

  var scrollState = (0, _useScrollState.useScrollState)();

  var context = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, commonRefs), focusManagement), scrollState), {}, {
    data: data,
    id: id,
    isVisible: isVisible,
    onChange: onChange,
    openOnClick: openOnClick,
    openOnFocus: openOnFocus,
    state: state,
    transition: transition
  });

  return _react["default"].createElement(_ComboboxContext.ComboboxMultiContext.Provider, {
    value: context
  }, _react["default"].createElement(_Combobox.ComboboxWrapper, (0, _extends2["default"])({
    id: id
  }, rest, {
    isVisible: isVisible,
    ref: ref
  })));
});
exports.ComboboxMultiInternal = ComboboxMultiInternal;
ComboboxMultiInternal.displayName = 'ComboboxMultiInternal';
var ComboboxMulti = (0, _styledComponents["default"])(ComboboxMultiInternal).attrs(function (_ref2) {
  var _ref2$display = _ref2.display,
      display = _ref2$display === void 0 ? 'flex' : _ref2$display;
  return {
    display: display
  };
}).withConfig({
  displayName: "ComboboxMulti",
  componentId: "sc-1okouq3-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.ComboboxMulti = ComboboxMulti;
//# sourceMappingURL=ComboboxMulti.js.map
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxInternal = exports.Combobox = void 0;
var _isMatch = _interopRequireDefault(require("lodash/isMatch"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../../utils");
var _useFocusManagement = require("../utils/useFocusManagement");
var _state = require("../utils/state");
var _ComboboxContext = require("../ComboboxContext");
var _getComboboxText = require("../utils/getComboboxText");
var _useComboboxRefs2 = require("../utils/useComboboxRefs");
var _useComboboxToggle = require("../utils/useComboboxToggle");
var _useScrollState = require("../utils/useScrollState");
var _ComboboxWrapper = require("../ComboboxWrapper");
var _templateObject;
var _excluded = ["openOnFocus", "openOnClick", "onChange", "value", "defaultValue", "onClose", "onOpen", "id", "shouldRenderListInline"],
  _excluded2 = ["ref"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ComboboxInternal = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var _ref$openOnFocus = _ref.openOnFocus,
    openOnFocus = _ref$openOnFocus === void 0 ? false : _ref$openOnFocus,
    _ref$openOnClick = _ref.openOnClick,
    openOnClick = _ref$openOnClick === void 0 ? true : _ref$openOnClick,
    onChange = _ref.onChange,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    onClose = _ref.onClose,
    onOpen = _ref.onOpen,
    propsID = _ref.id,
    shouldRenderListInline = _ref.shouldRenderListInline,
    rest = _objectWithoutProperties(_ref, _excluded);
  var initialValue = value || defaultValue;
  var initialData = initialValue ? {
    inputValue: (0, _getComboboxText.getComboboxText)(initialValue),
    option: initialValue
  } : {};
  var _useReducerMachine = (0, _state.useReducerMachine)(_state.reducer, _objectSpread(_objectSpread({}, _ComboboxContext.defaultData), initialData), {}, shouldRenderListInline),
    _useReducerMachine2 = _slicedToArray(_useReducerMachine, 3),
    state = _useReducerMachine2[0],
    data = _useReducerMachine2[1],
    transition = _useReducerMachine2[2];
  var lastActionType = data.lastActionType,
    option = data.option;
  if (value !== undefined && (!option || !(0, _isMatch["default"])(option, value))) {
    transition && transition(_state.ComboboxActionType.SELECT_SILENT, {
      option: value
    });
  }
  var focusManagement = (0, _useFocusManagement.useFocusManagement)(lastActionType);
  var id = (0, _utils.useID)(propsID);
  var isVisible = (0, _useComboboxToggle.useComboboxToggle)(state, option, onOpen, onClose);
  var _useComboboxRefs = (0, _useComboboxRefs2.useComboboxRefs)(forwardedRef),
    ref = _useComboboxRefs.ref,
    commonRefs = _objectWithoutProperties(_useComboboxRefs, _excluded2);
  var scrollState = (0, _useScrollState.useScrollState)();
  var context = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, commonRefs), focusManagement), scrollState), {}, {
    data: data,
    id: id,
    isVisible: isVisible,
    onChange: onChange,
    openOnClick: openOnClick,
    openOnFocus: openOnFocus,
    shouldRenderListInline: shouldRenderListInline,
    state: state,
    transition: transition
  });
  return _react["default"].createElement(_ComboboxContext.ComboboxContext.Provider, {
    value: context
  }, _react["default"].createElement(_ComboboxWrapper.ComboboxWrapper, _extends({
    id: id
  }, rest, {
    isVisible: isVisible,
    ref: ref,
    role: rest.role
  })));
});
exports.ComboboxInternal = ComboboxInternal;
var Combobox = (0, _styledComponents["default"])(ComboboxInternal).attrs(function (_ref2) {
  var _ref2$display = _ref2.display,
    display = _ref2$display === void 0 ? 'flex' : _ref2$display,
    flexDirection = _ref2.flexDirection,
    shouldRenderListInline = _ref2.shouldRenderListInline;
  return {
    display: display,
    flexDirection: flexDirection || shouldRenderListInline && 'column'
  };
}).withConfig({
  displayName: "Combobox",
  componentId: "sc-cyiezv-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.Combobox = Combobox;
//# sourceMappingURL=Combobox.js.map
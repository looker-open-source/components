"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAccordion2 = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../utils");
var _Accordion2Content = require("./Accordion2Content");
var _accordionDefaults = require("./accordionDefaults");
var _AccordionIndicator = require("./AccordionIndicator");
var _useAriaLabelObjectRelationship = require("./useAriaLabelObjectRelationship");
var _excluded = ["children", "className", "density", "disabled", "label", "id", "indicatorPosition", "indicatorIcons", "defaultOpen", "isOpen", "onBlur", "onClick", "onClose", "onOpen", "onKeyUp", "role", "tabIndex", "toggleOpen"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
var useAccordion2 = function useAccordion2(_ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$density = _ref.density,
    density = _ref$density === void 0 ? _accordionDefaults.accordionDefaults.density : _ref$density,
    disabled = _ref.disabled,
    label = _ref.label,
    id = _ref.id,
    indicatorPosition = _ref.indicatorPosition,
    _ref$indicatorIcons = _ref.indicatorIcons,
    indicatorIcons = _ref$indicatorIcons === void 0 ? indicatorPosition === 'left' ? _accordionDefaults.accordionLeftDefaults.indicatorIcons : _accordionDefaults.accordionDefaults.indicatorIcons : _ref$indicatorIcons,
    _ref$defaultOpen = _ref.defaultOpen,
    defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
    propsIsOpen = _ref.isOpen,
    onBlur = _ref.onBlur,
    propsOnClick = _ref.onClick,
    onClose = _ref.onClose,
    onOpen = _ref.onOpen,
    onKeyUp = _ref.onKeyUp,
    role = _ref.role,
    _ref$tabIndex = _ref.tabIndex,
    tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
    propsToggleOpen = _ref.toggleOpen,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = (0, _react.useState)(defaultOpen),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var toggle = function toggle() {
    return setValue(!value);
  };
  var isOpen = propsIsOpen !== undefined ? propsIsOpen : value;
  var onClick = (0, _utils.useWrapEvent)(function () {
    isOpen ? onClose && onClose() : onOpen && onOpen();
    propsToggleOpen !== undefined ? propsToggleOpen(!isOpen) : toggle();
  }, propsOnClick);
  var clickableProps = (0, _utils.useClickable)({
    disabled: disabled,
    onBlur: onBlur,
    onClick: onClick,
    onKeyUp: onKeyUp,
    role: role
  });
  var _useAriaLabelObjectRe = (0, _useAriaLabelObjectRelationship.useAriaLabelObjectRelationship)(id),
    _useAriaLabelObjectRe2 = _slicedToArray(_useAriaLabelObjectRe, 2),
    labelProps = _useAriaLabelObjectRe2[0],
    objectProps = _useAriaLabelObjectRe2[1];
  var domProps = _objectSpread(_objectSpread({}, props), {}, {
    className: "".concat(isOpen ? 'open' : 'closed', " ").concat(className),
    id: id
  });
  var indicator = _react["default"].createElement(_AccordionIndicator.AccordionIndicator, {
    density: density,
    indicatorPosition: indicatorPosition
  }, isOpen ? indicatorIcons.open : indicatorIcons.close);
  var disclosureProps = _objectSpread(_objectSpread({}, labelProps), {}, {
    'aria-expanded': isOpen,
    children: label,
    className: clickableProps.focusVisible ? 'focusVisible ' : undefined,
    density: density,
    indicator: indicator,
    indicatorPosition: indicatorPosition,
    tabIndex: tabIndex
  }, clickableProps);
  var contentDomProps = _objectSpread(_objectSpread({}, objectProps), {}, {
    children: children,
    role: 'region'
  });
  var content = isOpen && _react["default"].createElement(_Accordion2Content.Accordion2Content, contentDomProps);
  return {
    content: content,
    contentDomProps: contentDomProps,
    disclosureProps: disclosureProps,
    domProps: domProps,
    isOpen: isOpen
  };
};
exports.useAccordion2 = useAccordion2;
//# sourceMappingURL=useAccordion2.js.map
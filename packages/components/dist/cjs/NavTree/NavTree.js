"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavTree = exports.INDICATOR_SPACER = void 0;
var _ArrowDropDown = require("@styled-icons/material/ArrowDropDown");
var _ArrowRight = require("@styled-icons/material/ArrowRight");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../Tree/utils");
var _ListItem = require("../ListItem");
var _TreeContext = require("../Tree/TreeContext");
var _Accordion = require("../Accordion2");
var _utils2 = require("../utils");
var _List = require("../List");
var _AccordionIndicator = require("../Accordion2/AccordionIndicator");
var _utils3 = require("../ListItem/utils");
var _WindowedTreeNode = require("../Tree/WindowedTreeNode");
var _NavTreeDisclosure = require("./NavTreeDisclosure");
var _NavTreeItemContent = require("./NavTreeItem/NavTreeItemContent");
var _excluded = ["children", "defaultOpen", "indicatorLabel", "isOpen", "label", "onBlur", "onClick", "onClose", "onFocus", "onKeyUp", "onOpen", "onMouseEnter", "onMouseLeave", "toggleOpen", "truncate"],
  _excluded2 = ["indicator", "children", "focusVisible", "onBlur", "onClick", "onKeyUp"];
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var INDICATOR_SPACER = '8px';
exports.INDICATOR_SPACER = INDICATOR_SPACER;
var NavTree = (0, _styledComponents["default"])(function (_ref) {
  var children = _ref.children,
    defaultOpen = _ref.defaultOpen,
    indicatorLabel = _ref.indicatorLabel,
    propsIsOpen = _ref.isOpen,
    label = _ref.label,
    onBlur = _ref.onBlur,
    onClick = _ref.onClick,
    onClose = _ref.onClose,
    onFocus = _ref.onFocus,
    onKeyUp = _ref.onKeyUp,
    onOpen = _ref.onOpen,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    propsToggleOpen = _ref.toggleOpen,
    _ref$truncate = _ref.truncate,
    truncate = _ref$truncate === void 0 ? true : _ref$truncate,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var isIndicatorToggleOnly = !!restProps.href;
  var _partitionTreeProps = (0, _utils.partitionTreeProps)(restProps),
    _partitionTreeProps2 = _slicedToArray(_partitionTreeProps, 2),
    treeItemInnerProps = _partitionTreeProps2[0],
    accordionInnerProps = _partitionTreeProps2[1];
  var _useTreeHandlers = (0, _utils.useTreeHandlers)({
      onFocus: onFocus,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }),
    hovered = _useTreeHandlers.hovered,
    contentHandlers = _useTreeHandlers.contentHandlers,
    wrapperHandlers = _useTreeHandlers.wrapperHandlers;
  var _ref2 = treeItemInnerProps,
    disabled = _ref2.disabled,
    href = _ref2.href,
    icon = _ref2.icon,
    rel = _ref2.rel,
    selected = _ref2.selected,
    target = _ref2.target;
  var _partitionAriaProps = (0, _utils2.partitionAriaProps)(restProps),
    _partitionAriaProps2 = _slicedToArray(_partitionAriaProps, 1),
    ariaProps = _partitionAriaProps2[0];
  var treeContext = (0, _react.useContext)(_TreeContext.TreeContext);
  var _useContext = (0, _react.useContext)(_WindowedTreeNode.WindowedTreeContext),
    contextIsOpen = _useContext.isOpen,
    toggleNode = _useContext.toggleNode,
    partialRender = _useContext.partialRender;
  var isOpen = contextIsOpen !== null && contextIsOpen !== void 0 ? contextIsOpen : propsIsOpen;
  var toggleOpen = toggleNode !== null && toggleNode !== void 0 ? toggleNode : propsToggleOpen;
  var startingDepth = 0;
  var depth = treeContext.depth ? treeContext.depth : startingDepth;
  var _createListItemPartit = (0, _utils3.createListItemPartitions)(_objectSpread(_objectSpread({}, treeItemInnerProps), {}, {
      children: label,
      icon: icon,
      truncate: truncate
    })),
    _createListItemPartit2 = _slicedToArray(_createListItemPartit, 2),
    inside = _createListItemPartit2[0],
    outside = _createListItemPartit2[1];
  var accordionProps = _objectSpread({
    defaultOpen: defaultOpen,
    onClose: onClose,
    onOpen: onOpen
  }, accordionInnerProps);
  if (isOpen !== undefined && toggleOpen) {
    accordionProps = _objectSpread(_objectSpread({}, accordionProps), {}, {
      isOpen: isOpen,
      toggleOpen: toggleOpen
    });
  }
  var _useAccordion = (0, _Accordion.useAccordion2)(_objectSpread({
      'aria-selected': selected,
      children: _react["default"].createElement(_List.List, {
        disableKeyboardNav: true,
        role: "group",
        windowing: false
      }, children),
      disabled: disabled,
      indicatorIcons: {
        close: _react["default"].createElement(_ArrowRight.ArrowRight, {
          "aria-label": "".concat(indicatorLabel, " Close")
        }),
        open: _react["default"].createElement(_ArrowDropDown.ArrowDropDown, {
          "aria-label": "".concat(indicatorLabel, " Open")
        })
      },
      indicatorPosition: 'left',
      label: inside,
      onBlur: onBlur,
      role: 'treeitem',
      tabIndex: -1
    }, accordionProps)),
    contentDomProps = _useAccordion.contentDomProps,
    domProps = _useAccordion.domProps,
    disclosureProps = _useAccordion.disclosureProps,
    accordionIsOpen = _useAccordion.isOpen;
  var indicator = disclosureProps.indicator,
    disclosureLabel = disclosureProps.children,
    _disclosureFocusVisible = disclosureProps.focusVisible,
    onBlurDisclosureToggle = disclosureProps.onBlur,
    onClickDisclosureToggle = disclosureProps.onClick,
    onKeyUpDisclosureToggle = disclosureProps.onKeyUp,
    disclosureDomProps = _objectWithoutProperties(disclosureProps, _excluded2);
  var indicatorToggleOnlyProps = {
    onBlur: onBlurDisclosureToggle,
    onClick: onClickDisclosureToggle,
    onKeyUp: onKeyUpDisclosureToggle,
    tabIndex: -1
  };
  var renderedIndicator = (0, _react.cloneElement)(indicator, _objectSpread({}, isIndicatorToggleOnly ? indicatorToggleOnlyProps : undefined));
  var handleContentBlur = (0, _utils2.useWrapEvent)(function (event) {
    if (!isIndicatorToggleOnly && onBlurDisclosureToggle) onBlurDisclosureToggle(event);
  });
  var handleContentClick = (0, _utils2.useWrapEvent)(function (event) {
    if (!isIndicatorToggleOnly && onClickDisclosureToggle) onClickDisclosureToggle(event);
  }, onClick);
  var handleContentKeyUp = (0, _utils2.useWrapEvent)(function (event) {
    if (!isIndicatorToggleOnly && onKeyUpDisclosureToggle) onKeyUpDisclosureToggle(event);
  });
  var statefulProps = {
    color: 'key',
    disabled: disabled,
    hovered: hovered,
    ripple: true,
    selected: selected
  };
  var content = _react["default"].createElement(_react["default"].Fragment, null, isIndicatorToggleOnly && renderedIndicator, _react["default"].createElement(_NavTreeItemContent.NavTreeItemContent, _extends({
    "aria-selected": selected,
    href: href,
    itemRole: isIndicatorToggleOnly ? 'link' : 'none',
    onBlur: handleContentBlur,
    onClick: handleContentClick,
    onKeyUp: handleContentKeyUp,
    rel: (0, _utils2.createSafeRel)(rel, target),
    ripple: false,
    target: target
  }, ariaProps, contentHandlers, disclosureDomProps), !isIndicatorToggleOnly && renderedIndicator, disclosureLabel));
  return _react["default"].createElement(_utils2.HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, _react["default"].createElement(_TreeContext.TreeContext.Provider, {
    value: {
      color: statefulProps.color,
      depth: depth + 1
    }
  }, _react["default"].createElement("div", domProps, !partialRender && _react["default"].createElement(_NavTreeDisclosure.NavTreeDisclosure, _extends({
    depth: depth
  }, wrapperHandlers, statefulProps), content, outside), accordionIsOpen && _react["default"].createElement("div", contentDomProps))));
}).withConfig({
  displayName: "NavTree",
  componentId: "sc-1ynatxb-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", " {\n    padding-left: ", ";\n    ", "\n  }\n"])), _AccordionIndicator.AccordionIndicator, INDICATOR_SPACER, function (_ref3) {
  var icon = _ref3.icon,
    theme = _ref3.theme;
  return !icon && "margin-right: ".concat(theme.space[(0, _ListItem.listItemDimensions)(theme.defaults.density).gap], ";");
});
exports.NavTree = NavTree;
//# sourceMappingURL=NavTree.js.map
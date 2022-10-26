"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavTree = exports.INDICATOR_SPACER = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

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

var _NavTreeItemContent = require("./NavTreeItemContent");

var _excluded = ["children", "defaultOpen", "indicatorLabel", "isOpen", "label", "onBlur", "onClick", "onClose", "onFocus", "onKeyUp", "onOpen", "onMouseEnter", "onMouseLeave", "toggleOpen", "truncate"],
    _excluded2 = ["indicator", "children", "focusVisible", "onBlur", "onClick", "onKeyUp"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var isIndicatorToggleOnly = !!restProps.href;

  var _partitionTreeProps = (0, _utils.partitionTreeProps)(restProps),
      _partitionTreeProps2 = (0, _slicedToArray2["default"])(_partitionTreeProps, 2),
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
      _partitionAriaProps2 = (0, _slicedToArray2["default"])(_partitionAriaProps, 1),
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
      _createListItemPartit2 = (0, _slicedToArray2["default"])(_createListItemPartit, 2),
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
      disclosureFocusVisible = disclosureProps.focusVisible,
      onBlurDisclosureToggle = disclosureProps.onBlur,
      onClickDisclosureToggle = disclosureProps.onClick,
      onKeyUpDisclosureToggle = disclosureProps.onKeyUp,
      disclosureDomProps = (0, _objectWithoutProperties2["default"])(disclosureProps, _excluded2);
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

  var content = _react["default"].createElement(_react["default"].Fragment, null, isIndicatorToggleOnly && renderedIndicator, _react["default"].createElement(_NavTreeItemContent.NavTreeItemContent, (0, _extends2["default"])({
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
  }, _react["default"].createElement("div", domProps, !partialRender && _react["default"].createElement(_NavTreeDisclosure.NavTreeDisclosure, (0, _extends2["default"])({
    depth: depth
  }, wrapperHandlers, statefulProps), content, outside), accordionIsOpen && _react["default"].createElement("div", contentDomProps))));
}).withConfig({
  displayName: "NavTree",
  componentId: "sc-1ynatxb-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    padding-left: ", ";\n    ", "\n  }\n"])), _AccordionIndicator.AccordionIndicator, INDICATOR_SPACER, function (_ref3) {
  var icon = _ref3.icon,
      theme = _ref3.theme;
  return !icon && "margin-right: ".concat(theme.space[(0, _ListItem.listItemDimensions)(theme.defaults.density).gap], ";");
});
exports.NavTree = NavTree;
//# sourceMappingURL=NavTree.js.map
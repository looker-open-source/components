"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tree = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _Accordion = require("../Accordion2");

var _Layout = require("../Layout");

var _utils = require("../utils");

var _List = require("../List");

var _ListItem = require("../ListItem");

var _utils2 = require("../ListItem/utils");

var _TreeContext = require("./TreeContext");

var _utils3 = require("./utils");

var _WindowedTreeNode = require("./WindowedTreeNode");

var _TreeItemContent = require("./TreeItemContent");

var _TreeItem = require("./TreeItem");

var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["border", "children", "isOpen", "itemRole", "label", "defaultOpen", "onBlur", "onClose", "onFocus", "onOpen", "onMouseEnter", "onMouseLeave", "toggleOpen"],
    _excluded2 = ["indicator", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var TreeLayout = function TreeLayout(_ref) {
  var propsBorder = _ref.border,
      children = _ref.children,
      propsIsOpen = _ref.isOpen,
      _ref$itemRole = _ref.itemRole,
      itemRole = _ref$itemRole === void 0 ? 'none' : _ref$itemRole,
      label = _ref.label,
      defaultOpen = _ref.defaultOpen,
      onBlur = _ref.onBlur,
      onClose = _ref.onClose,
      onFocus = _ref.onFocus,
      onOpen = _ref.onOpen,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      propsToggleOpen = _ref.toggleOpen,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _partitionTreeProps = (0, _utils3.partitionTreeProps)(restProps),
      _partitionTreeProps2 = (0, _slicedToArray2["default"])(_partitionTreeProps, 2),
      treeItemInnerProps = _partitionTreeProps2[0],
      accordionInnerProps = _partitionTreeProps2[1];

  var _useTreeHandlers = (0, _utils3.useTreeHandlers)({
    onFocus: onFocus,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }),
      hovered = _useTreeHandlers.hovered,
      contentHandlers = _useTreeHandlers.contentHandlers,
      wrapperHandlers = _useTreeHandlers.wrapperHandlers;

  var _ref2 = treeItemInnerProps,
      propsColor = _ref2.color,
      propsDensity = _ref2.density,
      disabled = _ref2.disabled,
      href = _ref2.href,
      icon = _ref2.icon,
      rel = _ref2.rel,
      selected = _ref2.selected,
      target = _ref2.target;

  var _partitionAriaProps = (0, _utils.partitionAriaProps)(restProps),
      _partitionAriaProps2 = (0, _slicedToArray2["default"])(_partitionAriaProps, 1),
      ariaProps = _partitionAriaProps2[0];

  var listContext = (0, _react.useContext)(_ListItem.ListItemContext);
  var treeContext = (0, _react.useContext)(_TreeContext.TreeContext);

  var _useContext = (0, _react.useContext)(_WindowedTreeNode.WindowedTreeContext),
      collectionDensity = _useContext.density,
      contextIsOpen = _useContext.isOpen,
      toggleNode = _useContext.toggleNode,
      partialRender = _useContext.partialRender;

  var isOpen = contextIsOpen !== null && contextIsOpen !== void 0 ? contextIsOpen : propsIsOpen;
  var toggleOpen = toggleNode !== null && toggleNode !== void 0 ? toggleNode : propsToggleOpen;
  var border = (0, _utils.undefinedCoalesce)([propsBorder, treeContext.border]);
  var color = (0, _utils.undefinedCoalesce)([propsColor, treeContext.color, listContext.color]);
  var startingDepth = 0;
  var depth = treeContext.depth ? treeContext.depth : startingDepth;
  var density = collectionDensity || propsDensity || treeContext.density || 0;
  var indicatorIcons = _utils3.indicatorDefaults.indicatorIcons,
      indicatorPosition = _utils3.indicatorDefaults.indicatorPosition;

  var _createListItemPartit = (0, _utils2.createListItemPartitions)(_objectSpread(_objectSpread({}, treeItemInnerProps), {}, {
    children: label,
    color: color,
    density: density,
    icon: icon
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
    density: density,
    disabled: disabled,
    indicatorIcons: indicatorIcons,
    indicatorPosition: indicatorPosition,
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
      disclosureDomProps = (0, _objectWithoutProperties2["default"])(disclosureProps, _excluded2);
  var statefulProps = {
    color: color,
    disabled: disabled,
    hovered: hovered,
    selected: selected
  };

  var content = _react["default"].createElement(_TreeItemContent.TreeItemContent, (0, _extends2["default"])({
    "aria-selected": selected,
    depth: depth,
    href: href,
    itemRole: itemRole
  }, contentHandlers, {
    rel: (0, _utils.createSafeRel)(rel, target),
    ripple: false,
    target: target
  }, ariaProps, disclosureDomProps, statefulProps), indicator, disclosureLabel);

  return _react["default"].createElement(_utils.HoverDisclosureContext.Provider, {
    value: {
      visible: hovered
    }
  }, _react["default"].createElement(_TreeContext.TreeContext.Provider, {
    value: {
      border: border,
      color: color,
      density: density,
      depth: depth + 1
    }
  }, _react["default"].createElement("div", domProps, !partialRender && _react["default"].createElement(_Layout.Flex, (0, _extends2["default"])({
    as: "li",
    color: "text5"
  }, wrapperHandlers), content, outside), accordionIsOpen && _react["default"].createElement(TreeAccordionContent, (0, _extends2["default"])({
    border: border,
    density: density,
    depth: depth
  }, contentDomProps)))));
};

var TreeAccordionContent = _styledComponents["default"].div.withConfig({
  displayName: "Tree__TreeAccordionContent",
  componentId: "sc-umxml-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _utils3.generateTreeBorder);

var dividersCSS = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    margin-top: 1px;\n  }\n\n  & & {\n    margin-top: 1px;\n  }\n"])), _TreeItem.TreeItem);
var Tree = (0, _styledComponents["default"])(TreeLayout).withConfig({
  displayName: "Tree",
  componentId: "sc-umxml-1"
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), function (_ref3) {
  var dividers = _ref3.dividers;
  return dividers && dividersCSS;
});
exports.Tree = Tree;
//# sourceMappingURL=Tree.js.map
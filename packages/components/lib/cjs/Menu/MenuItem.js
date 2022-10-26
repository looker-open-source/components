"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _designTokens = require("@looker/design-tokens");

var _ArrowRight = require("@styled-icons/material/ArrowRight");

var _Dialog = require("../Dialog");

var _ListItem = require("../ListItem");

var _utils = require("../utils");

var _NestedMenuProvider = require("./NestedMenuProvider");

var _useNestedMenu2 = require("./useNestedMenu");

var _excluded = ["className", "children", "detail", "onClick", "onKeyDown", "onMouseEnter", "onMouseLeave", "nestedMenu"],
    _excluded2 = ["onClick", "ref"];

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var MenuItem = (0, _styledComponents["default"])((0, _react.forwardRef)(function (_ref, forwardedRef) {
  var className = _ref.className,
      children = _ref.children,
      detail = _ref.detail,
      onClick = _ref.onClick,
      onKeyDown = _ref.onKeyDown,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      nestedMenu = _ref.nestedMenu,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var id = (0, _utils.useID)(props.id);

  var _useNestedMenu = (0, _useNestedMenu2.useNestedMenu)({
    id: id,
    nestedMenu: nestedMenu,
    onClick: onClick,
    onKeyDown: onKeyDown,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave
  }),
      popover = _useNestedMenu.popover,
      _useNestedMenu$domPro = _useNestedMenu.domProps,
      nestedMenuOnClick = _useNestedMenu$domPro.onClick,
      nestedMenuRef = _useNestedMenu$domPro.ref,
      nestedMenuProps = (0, _objectWithoutProperties2["default"])(_useNestedMenu$domPro, _excluded2);

  var ref = (0, _utils.useForkedRef)(nestedMenuRef, forwardedRef);
  var theme = (0, _styledComponents.useTheme)();

  var _useContext = (0, _react.useContext)(_ListItem.ListItemContext),
      density = _useContext.density;

  var _listItemDimensions = (0, _ListItem.listItemDimensions)(density || theme.defaults.density),
      iconSize = _listItemDimensions.iconSize;

  if (detail && nestedMenu) {
    console.warn('The detail prop is not supported when nestedMenu is used.');
  }

  detail = nestedMenu ? _react["default"].createElement(NestedMenuIndicator, {
    size: iconSize
  }) : detail;

  var _useContext2 = (0, _react.useContext)(_Dialog.DialogContext),
      closeModal = _useContext2.closeModal;

  var _useContext3 = (0, _react.useContext)(_NestedMenuProvider.NestedMenuContext),
      closeParentMenu = _useContext3.closeParentMenu;

  var handleOnClick = function handleOnClick(event) {
    nestedMenuOnClick(event);

    if (!event.defaultPrevented) {
      closeModal === null || closeModal === void 0 ? void 0 : closeModal();
      closeParentMenu === null || closeParentMenu === void 0 ? void 0 : closeParentMenu();
    }
  };

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_ListItem.ListItem, (0, _extends2["default"])({
    className: className,
    detail: detail,
    onClick: handleOnClick,
    ref: ref,
    role: "menuitem"
  }, nestedMenuProps, props), children), popover);
})).withConfig({
  displayName: "MenuItem",
  componentId: "sc-13x060p-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  /** Styling for items that have nested menus */\n  [aria-expanded='true'] {\n    background: ", ";\n  }\n"])), function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.ui1;
});
exports.MenuItem = MenuItem;
var NestedMenuIndicator = (0, _styledComponents["default"])(_ArrowRight.ArrowRight).withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "MenuItem__NestedMenuIndicator",
  componentId: "sc-13x060p-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  ", "\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.text1;
}, _designTokens.size);
//# sourceMappingURL=MenuItem.js.map
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNestedMenu = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _Dialog = require("../Dialog");
var _Popover = require("../Popover");
var _utils = require("../utils");
var _ListItem = require("../ListItem");
var _NestedMenuProvider = require("./NestedMenuProvider");
var _NestedMenuSurface = require("./NestedMenuSurface");
var _ = require("./");
var _excluded = ["onClick"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var movingTowardPlacement = function movingTowardPlacement(newPos, prevPos, placement) {
  if (!prevPos || !placement) return false;
  switch (placement) {
    case 'right-start':
      return newPos.x > prevPos.x && newPos.y > prevPos.y;
    case 'right-end':
      return newPos.x > prevPos.x && newPos.y < prevPos.y;
    case 'left-start':
      return newPos.x < prevPos.x && newPos.y > prevPos.y;
    case 'left-end':
      return newPos.x < prevPos.x && newPos.y < prevPos.y;
    default:
      return newPos.x > prevPos.x && newPos.y > prevPos.y;
  }
};
var noop = function noop() {
  return undefined;
};
var useNestedMenu = function useNestedMenu(_ref) {
  var id = _ref.id,
    onClick = _ref.onClick,
    onKeyDown = _ref.onKeyDown,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    nestedMenu = _ref.nestedMenu;
  var mousePosition = (0, _react.useRef)();
  var focusRef = (0, _react.useRef)(null);
  var _useContext = (0, _react.useContext)(_NestedMenuProvider.NestedMenuContext),
    value = _useContext.value,
    change = _useContext.change,
    delayChange = _useContext.delayChange,
    waitChange = _useContext.waitChange;
  var _useContext2 = (0, _react.useContext)(_Dialog.DialogContext),
    closeModal = _useContext2.closeModal;
  var _useContext3 = (0, _react.useContext)(_ListItem.ListItemContext),
    density = _useContext3.density;
  var isOpen = value === id;
  var openNestedMenu = function openNestedMenu() {
    return change(id);
  };
  var closeNestedMenu = function closeNestedMenu() {
    return change('');
  };
  var itemHandlers = {
    onClick: (0, _utils.useWrapEvent)(function (e) {
      if (nestedMenu && !onClick) {
        openNestedMenu();
        e.preventDefault();
      }
    }, onClick),
    onKeyDown: (0, _utils.useWrapEvent)(nestedMenu ? function (e) {
      if (e.key === 'ArrowRight') {
        openNestedMenu();
        e.preventDefault();
      }
    } : noop, onKeyDown),
    onMouseEnter: (0, _utils.useWrapEvent)(nestedMenu ? function (e) {
      if (value === '') {
        delayChange(id, 100);
      } else {
        waitChange(id);
      }
      focusRef.current = e.currentTarget;
    } : noop, onMouseEnter),
    onMouseLeave: (0, _utils.useWrapEvent)(nestedMenu ? function (e) {
      if (isOpen) {
        var _popperInstanceRef$cu;
        if (movingTowardPlacement({
          x: e.screenX,
          y: e.screenY
        }, mousePosition.current, (_popperInstanceRef$cu = popperInstanceRef.current) === null || _popperInstanceRef$cu === void 0 ? void 0 : _popperInstanceRef$cu.state.placement)) {
          delayChange('', _designTokens.transitions.complex);
        } else {
          change('');
        }
        mousePosition.current = undefined;
      } else {
        change('');
      }
    } : noop, onMouseLeave),
    onMouseMove: function onMouseMove(e) {
      mousePosition.current = {
        x: e.screenX,
        y: e.screenY
      };
    }
  };
  var listHandlers = nestedMenu ? {
    onKeyDown: function onKeyDown(e) {
      switch (e.key) {
        case 'ArrowLeft':
          closeNestedMenu();
          e.preventDefault();
          break;
        case 'Escape':
          closeModal();
          break;
      }
    },
    onMouseEnter: openNestedMenu
  } : {};
  var _usePopover = (0, _Popover.usePopover)({
      content: _react["default"].createElement(_.MenuList, _extends({
        "data-autofocus": "true",
        density: density
      }, listHandlers, {
        closeParentMenu: closeModal
      }), nestedMenu),
      disabled: nestedMenu === undefined,
      isOpen: isOpen,
      placement: 'right-start',
      scrollLock: false,
      setOpen: closeNestedMenu,
      surface: _NestedMenuSurface.NestedMenuSurface,
      triggerToggle: false
    }),
    popover = _usePopover.popover,
    popperInstanceRef = _usePopover.popperInstanceRef,
    _usePopover$domProps = _usePopover.domProps,
    _domPropsOnClick = _usePopover$domProps.onClick,
    restDomProps = _objectWithoutProperties(_usePopover$domProps, _excluded);
  (0, _react.useEffect)(function () {
    if (isOpen && focusRef.current) {
      var button = focusRef.current.querySelector('a,button');
      button === null || button === void 0 ? void 0 : button.focus();
    }
  }, [isOpen]);
  var combinedDomProps = _objectSpread(_objectSpread({}, itemHandlers), nestedMenu ? restDomProps : {});
  return {
    domProps: combinedDomProps,
    popover: popover
  };
};
exports.useNestedMenu = useNestedMenu;
//# sourceMappingURL=useNestedMenu.js.map
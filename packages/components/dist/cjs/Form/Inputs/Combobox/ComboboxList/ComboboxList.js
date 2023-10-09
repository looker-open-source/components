"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxUl = exports.ComboboxMultiList = exports.ComboboxList = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _once = _interopRequireDefault(require("lodash/once"));
var _throttle = _interopRequireDefault(require("lodash/throttle"));
var _Layout = require("../../../../Layout");
var _Popover = require("../../../../Popover");
var _utils = require("../../../../List/utils");
var _utils2 = require("../../../../utils");
var _ComboboxContext = require("../ComboboxContext");
var _useBlur = require("../utils/useBlur");
var _useKeyDown = require("../utils/useKeyDown");
var _useListWidths = require("../utils/useListWidths");
var _useUpdateListRefs = require("../utils/useUpdateListRefs");
var _templateObject;
var _excluded = ["cancelClickOutside", "isMulti", "minWidth", "width"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ComboboxListInternal = (0, _react.forwardRef)(function (_ref, ref) {
  var _ref$cancelClickOutsi = _ref.cancelClickOutside,
    cancelClickOutside = _ref$cancelClickOutsi === void 0 ? false : _ref$cancelClickOutsi,
    isMulti = _ref.isMulti,
    minWidth = _ref.minWidth,
    width = _ref.width,
    props = _objectWithoutProperties(_ref, _excluded);
  var context = (0, _react.useContext)(_ComboboxContext.ComboboxContext);
  var contextMulti = (0, _react.useContext)(_ComboboxContext.ComboboxMultiContext);
  var contextToUse = isMulti ? contextMulti : context;
  var inlineContainerRef = (0, _react.useRef)(null);
  var wrapperElement = contextToUse.wrapperElement,
    isVisible = contextToUse.isVisible,
    listRef = contextToUse.listRef,
    setListScrollPosition = contextToUse.setListScrollPosition,
    setListClientRect = contextToUse.setListClientRect,
    isScrollingRef = contextToUse.isScrollingRef,
    id = contextToUse.id,
    shouldRenderListInline = contextToUse.shouldRenderListInline;
  (0, _useUpdateListRefs.useUpdateListRefs)(_objectSpread({
    isMulti: isMulti
  }, props));
  var handleKeyDown = (0, _useKeyDown.useKeyDown)();
  var useBlurSingle = (0, _useBlur.useBlur)(_ComboboxContext.ComboboxContext);
  var useBlurMulti = (0, _useBlur.useBlur)(_ComboboxContext.ComboboxMultiContext);
  var handleBlur = isMulti ? useBlurMulti : useBlurSingle;
  var widthProps = (0, _useListWidths.useListWidths)({
    isVisible: isVisible,
    minWidth: minWidth,
    width: width,
    wrapperElement: wrapperElement
  });
  var content = _react["default"].createElement(ComboboxUl, _extends({}, props, widthProps, {
    isMulti: isMulti,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    ref: ref,
    role: "listbox",
    id: "listbox-".concat(id),
    tabIndex: -1
  }));
  var setOpen = function setOpen(isOpen) {
    if (!isOpen) {
      handleBlur();
    }
  };
  var _usePopover = (0, _Popover.usePopover)({
      ariaLabel: props['aria-label'],
      cancelClickOutside: cancelClickOutside,
      content: content,
      focusTrap: false,
      isOpen: isVisible,
      placement: 'bottom-start',
      setOpen: setOpen,
      triggerElement: wrapperElement,
      triggerToggle: false
    }),
    popover = _usePopover.popover,
    contentContainer = _usePopover.contentContainer,
    popperInstanceRef = _usePopover.popperInstanceRef;
  if (popperInstanceRef.current && listRef) {
    listRef.current = popperInstanceRef.current.state.elements.popper;
  }
  var containerToUse = shouldRenderListInline ? inlineContainerRef.current : contentContainer;
  var valueLength = isMulti ? contextMulti.data.options.length : 1;
  (0, _react.useEffect)(function () {
    popperInstanceRef.current && popperInstanceRef.current.update();
  }, [popperInstanceRef, valueLength]);
  var resizeListener = (0, _react.useCallback)(function () {
    setListClientRect === null || setListClientRect === void 0 ? void 0 : setListClientRect(containerToUse === null || containerToUse === void 0 ? void 0 : containerToUse.getBoundingClientRect());
  }, [setListClientRect, containerToUse]);
  (0, _utils2.useResize)(containerToUse, resizeListener);
  (0, _react.useEffect)(function () {
    var setListClientRectOnce = (0, _once["default"])(function (containerElement) {
      setListClientRect && setListClientRect(containerElement.getBoundingClientRect());
    });
    var updateScrollState = function updateScrollState(containerElement) {
      setListClientRectOnce(containerElement);
      setListScrollPosition === null || setListScrollPosition === void 0 ? void 0 : setListScrollPosition(containerElement.scrollTop);
    };
    var timeoutValue = 50;
    var t;
    var scrollListener = (0, _throttle["default"])(function () {
      if (containerToUse) {
        updateScrollState(containerToUse);
        if (isScrollingRef) isScrollingRef.current = true;
        clearTimeout(t);
        t = setTimeout(function () {
          if (isScrollingRef) isScrollingRef.current = false;
        }, timeoutValue + 1);
      }
    }, timeoutValue);
    if (containerToUse) {
      containerToUse.addEventListener('scroll', scrollListener);
      updateScrollState(containerToUse);
    }
    return function () {
      containerToUse && containerToUse.removeEventListener('scroll', scrollListener);
      setListScrollPosition && setListScrollPosition(0);
      setListClientRect && setListClientRect(undefined);
    };
  }, [containerToUse]);
  if (shouldRenderListInline) {
    return _react["default"].createElement(_Layout.Box, {
      ref: inlineContainerRef,
      position: "relative",
      overflowY: "auto",
      maxHeight: "100%",
      mt: "small"
    }, content);
  }
  return popover || null;
});
var ComboboxUl = _styledComponents["default"].ul.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "ComboboxList__ComboboxUl",
  componentId: "sc-fgr1up-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  list-style-type: none;\n  margin: 0;\n  max-height: 30rem;\n  outline: none;\n  position: relative;\n  ", "\n\n  ", "\n"])), _designTokens.reset, _designTokens.typography, _designTokens.space, _designTokens.layout, _utils.listPadding);
exports.ComboboxUl = ComboboxUl;
var ComboboxList = function ComboboxList(props) {
  return _react["default"].createElement(ComboboxListInternal, _extends({}, props, {
    isMulti: false
  }));
};
exports.ComboboxList = ComboboxList;
var ComboboxMultiList = function ComboboxMultiList(props) {
  return _react["default"].createElement(ComboboxListInternal, _extends({}, props, {
    isMulti: true
  }));
};
exports.ComboboxMultiList = ComboboxMultiList;
//# sourceMappingURL=ComboboxList.js.map
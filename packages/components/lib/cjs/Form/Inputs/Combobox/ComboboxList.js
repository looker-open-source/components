"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxUl = exports.ComboboxMultiList = exports.ComboboxList = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _designTokens = require("@looker/design-tokens");

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _once = _interopRequireDefault(require("lodash/once"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _Popover = require("../../../Popover");

var _utils = require("../../../List/utils");

var _utils2 = require("../../../utils");

var _ComboboxContext = require("./ComboboxContext");

var _useBlur = require("./utils/useBlur");

var _useKeyDown = require("./utils/useKeyDown");

var _useListWidths = require("./utils/useListWidths");

var _templateObject;

var _excluded = ["persistSelection", "closeOnSelect", "windowing", "cancelClickOutside", "indicator", "isMulti", "minWidth", "width"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ComboboxListInternal = (0, _react.forwardRef)(function (_ref, ref) {
  var _ref$persistSelection = _ref.persistSelection,
      persistSelection = _ref$persistSelection === void 0 ? false : _ref$persistSelection,
      _ref$closeOnSelect = _ref.closeOnSelect,
      closeOnSelect = _ref$closeOnSelect === void 0 ? true : _ref$closeOnSelect,
      _ref$windowing = _ref.windowing,
      windowing = _ref$windowing === void 0 ? false : _ref$windowing,
      _ref$cancelClickOutsi = _ref.cancelClickOutside,
      cancelClickOutside = _ref$cancelClickOutsi === void 0 ? false : _ref$cancelClickOutsi,
      indicator = _ref.indicator,
      isMulti = _ref.isMulti,
      minWidth = _ref.minWidth,
      width = _ref.width,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var context = (0, _react.useContext)(_ComboboxContext.ComboboxContext);
  var contextMulti = (0, _react.useContext)(_ComboboxContext.ComboboxMultiContext);
  var contextToUse = isMulti ? contextMulti : context;
  var persistSelectionPropRef = contextToUse.persistSelectionPropRef,
      closeOnSelectPropRef = contextToUse.closeOnSelectPropRef,
      windowingPropRef = contextToUse.windowingPropRef,
      indicatorPropRef = contextToUse.indicatorPropRef,
      wrapperElement = contextToUse.wrapperElement,
      isVisible = contextToUse.isVisible,
      optionsRef = contextToUse.optionsRef,
      listRef = contextToUse.listRef,
      setListScrollPosition = contextToUse.setListScrollPosition,
      setListClientRect = contextToUse.setListClientRect,
      isScrollingRef = contextToUse.isScrollingRef,
      id = contextToUse.id;
  if (persistSelectionPropRef) persistSelectionPropRef.current = persistSelection;
  if (closeOnSelectPropRef) closeOnSelectPropRef.current = closeOnSelect;
  if (indicatorPropRef) indicatorPropRef.current = indicator;
  (0, _utils2.useSafeLayoutEffect)(function () {
    if (windowingPropRef) windowingPropRef.current = windowing;
    if (optionsRef) optionsRef.current = [];
    return function () {
      if (optionsRef) optionsRef.current = [];
    };
  }, [optionsRef, isVisible, windowing, windowingPropRef]);
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

  var content = _react["default"].createElement(ComboboxUl, (0, _extends2["default"])({}, props, widthProps, {
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

  var valueLength = isMulti ? contextMulti.data.options.length : 1;
  (0, _react.useEffect)(function () {
    popperInstanceRef.current && popperInstanceRef.current.update();
  }, [popperInstanceRef, valueLength]);
  var resizeListener = (0, _react.useCallback)(function () {
    setListClientRect === null || setListClientRect === void 0 ? void 0 : setListClientRect(contentContainer === null || contentContainer === void 0 ? void 0 : contentContainer.getBoundingClientRect());
  }, [setListClientRect, contentContainer]);
  (0, _utils2.useResize)(contentContainer, resizeListener);
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
      if (contentContainer) {
        updateScrollState(contentContainer);
        if (isScrollingRef) isScrollingRef.current = true;
        clearTimeout(t);
        t = setTimeout(function () {
          if (isScrollingRef) isScrollingRef.current = false;
        }, timeoutValue + 1);
      }
    }, timeoutValue);

    if (contentContainer) {
      contentContainer.addEventListener('scroll', scrollListener);
      updateScrollState(contentContainer);
    }

    return function () {
      contentContainer && contentContainer.removeEventListener('scroll', scrollListener);
      setListScrollPosition && setListScrollPosition(0);
      setListClientRect && setListClientRect(undefined);
    };
  }, [contentContainer]);
  return popover || null;
});
ComboboxListInternal.displayName = 'ComboboxListInternal';

var ComboboxUl = _styledComponents["default"].ul.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "ComboboxList__ComboboxUl",
  componentId: "sc-1ban10u-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n  ", "\n  list-style-type: none;\n  margin: 0;\n  max-height: 30rem;\n  outline: none;\n  position: relative;\n  ", "\n\n  ", "\n"])), _designTokens.reset, _designTokens.typography, _designTokens.space, _designTokens.layout, _utils.listPadding);

exports.ComboboxUl = ComboboxUl;

var ComboboxList = function ComboboxList(props) {
  return _react["default"].createElement(ComboboxListInternal, (0, _extends2["default"])({}, props, {
    isMulti: false
  }));
};

exports.ComboboxList = ComboboxList;

var ComboboxMultiList = function ComboboxMultiList(props) {
  return _react["default"].createElement(ComboboxListInternal, (0, _extends2["default"])({}, props, {
    isMulti: true
  }));
};

exports.ComboboxMultiList = ComboboxMultiList;
//# sourceMappingURL=ComboboxList.js.map
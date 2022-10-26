"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionHeight = void 0;
exports.useShouldWindowOptions = useShouldWindowOptions;
exports.useWindowedOptions = useWindowedOptions;

var _findIndex = _interopRequireDefault(require("lodash/findIndex"));

var _react = _interopRequireWildcard(require("react"));

var _getWindowedListBoundaries = require("../../../../utils/getWindowedListBoundaries");

var _Combobox = require("../../Combobox");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var optionHeight = 28;
exports.optionHeight = optionHeight;

function useShouldWindowOptions(flatOptions, propsWindowedOptions) {
  return (0, _react.useMemo)(function () {
    if (!flatOptions) return false;
    if (propsWindowedOptions === false) return false;
    if (flatOptions.length < 100 && !propsWindowedOptions) return false;
    return true;
  }, [flatOptions, propsWindowedOptions]);
}

function useWindowedOptions(windowing, flatOptions, navigationOptions, isMulti) {
  var context = (0, _react.useContext)(_Combobox.ComboboxContext);
  var contextMulti = (0, _react.useContext)(_Combobox.ComboboxMultiContext);
  var contextToUse = isMulti ? contextMulti : context;
  var navigationOption = contextToUse.data.navigationOption,
      listClientRect = contextToUse.listClientRect,
      listScrollPosition = contextToUse.listScrollPosition,
      isScrollingRef = contextToUse.isScrollingRef,
      optionsRef = contextToUse.optionsRef;
  (0, _react.useEffect)(function () {
    if (navigationOptions !== null && navigationOptions !== void 0 && navigationOptions.length && optionsRef) {
      optionsRef.current = navigationOptions;
    }
  }, [navigationOptions, optionsRef]);
  var containerHeight = listClientRect && listClientRect.height;

  var _useMemo = (0, _react.useMemo)(function () {
    return (0, _getWindowedListBoundaries.getWindowedListBoundaries)({
      enabled: windowing,
      height: containerHeight,
      itemCount: flatOptions ? flatOptions.length : 0,
      itemHeight: optionHeight,
      scrollPosition: listScrollPosition
    });
  }, [flatOptions, containerHeight, listScrollPosition, windowing]),
      start = _useMemo.start,
      end = _useMemo.end;

  var previouslyWindowedRef = (0, _react.useRef)();

  if (windowing && !previouslyWindowedRef.current) {
    if (navigationOption) {
      var selectedIndex = (0, _findIndex["default"])(flatOptions, ['value', navigationOption.value]);

      if (selectedIndex > -1) {
        start = selectedIndex;
        end = selectedIndex;
      }
    }
  }

  previouslyWindowedRef.current = windowing;
  var scrollToFirst = false;
  var scrollToLast = false;

  if (flatOptions !== null && flatOptions !== void 0 && flatOptions.length && navigationOptions !== null && navigationOptions !== void 0 && navigationOptions.length && navigationOption) {
    scrollToFirst = !(isScrollingRef !== null && isScrollingRef !== void 0 && isScrollingRef.current) && start > 0 && navigationOption.value === navigationOptions[0].value;
    scrollToLast = end < flatOptions.length - 1 && navigationOption.value === navigationOptions[navigationOptions.length - 1].value;
  }

  var afterLength = flatOptions ? flatOptions.length - 1 - end : 0;
  return {
    after: afterLength > 0 ? _react["default"].createElement("li", {
      style: {
        height: "".concat(afterLength * optionHeight, "px")
      }
    }) : null,
    before: start > 0 ? _react["default"].createElement("li", {
      style: {
        height: "".concat(start * optionHeight, "px")
      }
    }) : null,
    end: end,
    scrollToFirst: scrollToFirst,
    scrollToLast: scrollToLast,
    start: start
  };
}
//# sourceMappingURL=useWindowedOptions.js.map
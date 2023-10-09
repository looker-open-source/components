"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.optionHeight = exports.ScrollToMe = void 0;
exports.useShouldWindowOptions = useShouldWindowOptions;
exports.useWindowedOptions = useWindowedOptions;
var _findIndex = _interopRequireDefault(require("lodash/findIndex"));
var _react = _interopRequireWildcard(require("react"));
var _Layout = require("../../../../Layout");
var _getWindowedListBoundaries = require("../../../../utils/getWindowedListBoundaries");
var _Combobox = require("../../Combobox");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var getSelectedIndex = function getSelectedIndex(flatOptions, navigationOption) {
  return (0, _findIndex["default"])(flatOptions, ['value', navigationOption.value]);
};
function useWindowedOptions(windowing, flatOptions, navigationOptions, isMulti) {
  var itemHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : optionHeight;
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
        itemHeight: itemHeight,
        scrollPosition: listScrollPosition,
        spacerTag: 'li'
      });
    }, [flatOptions, containerHeight, listScrollPosition, windowing, itemHeight]),
    start = _useMemo.start,
    end = _useMemo.end,
    before = _useMemo.before,
    after = _useMemo.after;
  var previouslyWindowedRef = (0, _react.useRef)();
  if (flatOptions && windowing && !previouslyWindowedRef.current) {
    if (navigationOption) {
      var selectedIndex = getSelectedIndex(flatOptions, navigationOption);
      if (selectedIndex > -1) {
        start = selectedIndex;
        end = selectedIndex;
      }
    }
  }
  previouslyWindowedRef.current = windowing;
  var scrollTo = null;
  if (flatOptions !== null && flatOptions !== void 0 && flatOptions.length && navigationOptions !== null && navigationOptions !== void 0 && navigationOptions.length && navigationOption) {
    var _selectedIndex = getSelectedIndex(flatOptions, navigationOption);
    if (_selectedIndex > -1 && (_selectedIndex < start || _selectedIndex > end)) {
      scrollTo = _react["default"].createElement(ScrollToMe, {
        isScrollingRef: isScrollingRef,
        top: _selectedIndex * itemHeight
      });
    }
  }
  return {
    after: after,
    before: before,
    end: end,
    scrollTo: scrollTo,
    start: start
  };
}
var ScrollToMe = function ScrollToMe(_ref) {
  var top = _ref.top,
    isScrollingRef = _ref.isScrollingRef;
  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!(isScrollingRef !== null && isScrollingRef !== void 0 && isScrollingRef.current)) {
      var _ref$current;
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollIntoView();
    }
  }, [isScrollingRef]);
  return _react["default"].createElement(_Layout.Box, {
    position: "absolute",
    top: top,
    ref: ref
  });
};
exports.ScrollToMe = ScrollToMe;
//# sourceMappingURL=useWindowedOptions.js.map
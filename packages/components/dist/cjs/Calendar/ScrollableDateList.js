"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollableDateList = void 0;
var _dateFns = require("date-fns");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../utils");
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
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ScrollableDateList = (0, _styledComponents["default"])(function (_ref) {
  var className = _ref.className,
    currentDate = _ref.currentDate,
    baseMonth = _ref.baseMonth,
    setBaseMonth = _ref.setBaseMonth,
    buffer = _ref.buffer,
    getItemDate = _ref.getItemDate,
    onMonthChange = _ref.onMonthChange,
    Component = _ref.itemComponent,
    itemProps = _ref.itemProps,
    thresholdRatio = _ref.thresholdRatio;
  var _useCallbackRef = (0, _utils.useCallbackRef)(),
    _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
    containerElement = _useCallbackRef2[0],
    ref = _useCallbackRef2[1];
  var _useMeasuredElement = (0, _utils.useMeasuredElement)(containerElement),
    _useMeasuredElement2 = _slicedToArray(_useMeasuredElement, 1),
    height = _useMeasuredElement2[0].height;
  var scrollPosition = (0, _utils.useScrollPosition)(containerElement);
  var itemPositions = (0, _react.useRef)([]);
  var dates = (0, _react.useMemo)(function () {
    var total = Array(buffer * 2 + 1);
    var dateArray = Array.from(total, function (_, i) {
      return getItemDate(baseMonth, i - buffer);
    });
    itemPositions.current = dateArray.map(function (d) {
      return {
        date: d
      };
    });
    return dateArray;
  }, [baseMonth, buffer, getItemDate]);
  var containerHasHeight = height !== 0;
  var setItemPosition = (0, _react.useCallback)(function (index, element) {
    if (containerHasHeight) {
      itemPositions.current[index] = _objectSpread(_objectSpread({}, itemPositions.current[index]), {}, {
        bottom: element.offsetTop + element.offsetHeight,
        top: element.offsetTop
      });
    }
  }, [containerHasHeight]);
  var hasAutoScrolledToBaseItem = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    hasAutoScrolledToBaseItem.current = false;
  }, [baseMonth, buffer]);
  (0, _react.useEffect)(function () {
    var t = 0;
    if (containerElement && height) {
      if (!hasAutoScrolledToBaseItem.current) {
        var currentMonth = itemPositions.current.find(function (itemPos) {
          return (0, _dateFns.isSameMonth)(itemPos.date, baseMonth);
        });
        if (currentMonth !== null && currentMonth !== void 0 && currentMonth.top && currentMonth !== null && currentMonth !== void 0 && currentMonth.bottom) {
          var closeToBottom = scrollPosition > containerElement.scrollHeight - height * 2;
          var scrollTarget = closeToBottom ? currentMonth.bottom - height : currentMonth.top;
          containerElement.scrollTo(0, scrollTarget);
          hasAutoScrolledToBaseItem.current = true;
        }
      } else {
        var atTop = scrollPosition === 0;
        var atBottom = scrollPosition === containerElement.scrollHeight - height;
        if (atTop || atBottom) {
          var goToMonth = atTop ? dates[0] : dates[dates.length - 1];
          onMonthChange(goToMonth);
          setBaseMonth(goToMonth);
        } else {
          var updateCurrentMonth = (0, _debounce["default"])(function () {
            var threshold = scrollPosition + height * thresholdRatio;
            var inView = itemPositions.current.find(function (itemPos) {
              return itemPos.top && itemPos.bottom && threshold > itemPos.top && threshold < itemPos.bottom;
            });
            if (inView && !(0, _dateFns.isSameMonth)(currentDate, inView.date)) {
              onMonthChange(inView.date);
            }
          });
          t = window.setTimeout(updateCurrentMonth, 50);
        }
      }
    }
    return function () {
      window.clearTimeout(t);
    };
  }, [containerElement, currentDate, height, scrollPosition, dates, onMonthChange, setBaseMonth, thresholdRatio, baseMonth]);
  var inViewIndex = dates.findIndex(function (d) {
    return (0, _dateFns.isSameMonth)(d, currentDate);
  });
  return _react["default"].createElement("div", {
    className: className,
    ref: ref
  }, dates.map(function (item, i) {
    var fullRender = Math.abs(i - inViewIndex) <= 1;
    return _react["default"].createElement(Component, _extends({
      key: item.toString(),
      index: i,
      fullRender: fullRender,
      date: item
    }, itemProps, {
      setItemPosition: setItemPosition
    }));
  }));
}).withConfig({
  displayName: "ScrollableDateList",
  componentId: "sc-1jksxb7-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 220px;\n  overflow-y: scroll;\n  position: relative;\n"])));
exports.ScrollableDateList = ScrollableDateList;
//# sourceMappingURL=ScrollableDateList.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollableDateList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _dateFns = require("date-fns");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../utils");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
      containerElement = _useCallbackRef2[0],
      ref = _useCallbackRef2[1];

  var _useMeasuredElement = (0, _utils.useMeasuredElement)(containerElement),
      _useMeasuredElement2 = (0, _slicedToArray2["default"])(_useMeasuredElement, 1),
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
    return _react["default"].createElement(Component, (0, _extends2["default"])({
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  height: 220px;\n  overflow-y: scroll;\n  position: relative;\n"])));
exports.ScrollableDateList = ScrollableDateList;
//# sourceMappingURL=ScrollableDateList.js.map
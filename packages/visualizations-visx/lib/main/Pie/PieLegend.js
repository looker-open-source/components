"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PieLegend = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _legend = require("@visx/legend");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _components = require("@looker/components");
var _pick = _interopRequireDefault(require("lodash/pick"));
var _utils = require("../utils");
var _PieLegendControls = require("./PieLegendControls");
var _getLabelContent = require("./getLabelContent");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var getLegendStyle = function getLegendStyle(scale, orientation, theme) {
  var domain = scale.domain();
  var rows = domain.length > 3 ? 3 : 1;
  return orientation === 'horizontal' ? {
    display: "grid",
    gridTemplateRows: "repeat(".concat(rows, ", auto )"),
    gridColumnGap: theme.space.small,
    gridAutoFlow: "column"
  } : {};
};
var PieLegend = function PieLegend(_ref) {
  var legendConfig = _ref.legendConfig,
    scale = _ref.scale,
    data = _ref.data,
    measureTotal = _ref.measureTotal,
    height = _ref.height,
    width = _ref.width;
  var _useTranslation = (0, _utils.useTranslation)('PieLegend'),
    t = _useTranslation.t;

  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    page = _useState2[0],
    setPage = _useState2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _ref2 = legendConfig || {},
    position = _ref2.position;
  var ORIENTATION = position === 'top' || position === 'bottom' ? 'horizontal' : 'vertical';

  var _useCallbackRef = (0, _components.useCallbackRef)(null),
    _useCallbackRef2 = (0, _slicedToArray2["default"])(_useCallbackRef, 2),
    contentElement = _useCallbackRef2[0],
    contentRef = _useCallbackRef2[1];
  var _useMeasuredElement = (0, _components.useMeasuredElement)(contentElement),
    _useMeasuredElement2 = (0, _slicedToArray2["default"])(_useMeasuredElement, 1),
    _useMeasuredElement2$ = _useMeasuredElement2[0],
    contentHeight = _useMeasuredElement2$.height,
    contentWidth = _useMeasuredElement2$.width;
  var _useCallbackRef3 = (0, _components.useCallbackRef)(null),
    _useCallbackRef4 = (0, _slicedToArray2["default"])(_useCallbackRef3, 2),
    containerElement = _useCallbackRef4[0],
    containerRef = _useCallbackRef4[1];
  var _useMeasuredElement3 = (0, _components.useMeasuredElement)(containerElement),
    _useMeasuredElement4 = (0, _slicedToArray2["default"])(_useMeasuredElement3, 1),
    containerElementRect = _useMeasuredElement4[0];

  var containerHeight = typeof DOMRect === 'function' ? containerElementRect.height : height;
  var containerWidth = typeof DOMRect === 'function' ? containerElementRect.width : width;
  var pageSize = ORIENTATION === 'horizontal' ? containerWidth * 0.9 : containerHeight * 0.9;
  var totalPages = ORIENTATION === 'horizontal' ? Math.floor(contentWidth / Math.max(pageSize, 1)) : Math.floor(contentHeight / Math.max(pageSize, 1));

  var handleNextPage = function handleNextPage() {
    setPage(Math.min(page + 1, totalPages));
  };
  var handlePrevPage = function handlePrevPage() {
    setPage(Math.max(page - 1, 0));
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      handleNextPage();
      e.preventDefault();
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      handlePrevPage();
      e.preventDefault();
    }
  };
  return _react["default"].createElement(LegendWrapper, {
    maxHeight: height,
    maxWidth: width,
    orientation: ORIENTATION
  }, _react["default"].createElement(LegendContent, {
    ref: containerRef,
    tabIndex: 0,
    onKeyDown: handleKeyDown,
    role: "figure",
    "aria-label": t('Legend page {{page}} of {{totalPages}}', {
      page: page + 1,
      totalPages: totalPages + 1
    })
  }, _react["default"].createElement(ContentPositioner, {
    pageNumber: page,
    pageSize: pageSize,
    orientation: ORIENTATION,
    ref: contentRef
  }, _react["default"].createElement(_legend.LegendOrdinal, {
    labelFormat: function labelFormat(label) {
      var datum = (0, _pick["default"])(data, label);
      return (0, _getLabelContent.getLabelContent)(measureTotal, datum, legendConfig);
    },
    scale: scale,
    shape: "circle",
    style: getLegendStyle(scale, ORIENTATION, theme)
  }))), _react["default"].createElement(_PieLegendControls.PieLegendControls, {
    containerRect: {
      width: containerWidth,
      height: containerHeight
    },
    contentRect: {
      width: contentWidth,
      height: contentHeight
    },
    orientation: ORIENTATION,
    page: page,
    totalPages: totalPages,
    handleNextClick: handleNextPage,
    handlePrevClick: handlePrevPage
  }));
};
exports.PieLegend = PieLegend;
var LegendWrapper = _styledComponents["default"].div.withConfig({
  displayName: "PieLegend__LegendWrapper",
  componentId: "sc-1dt2jge-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border: 1px solid transparent;\n  display: grid;\n  max-height: ", "px;\n  max-width: ", "px;\n  overflow: hidden;\n  position: relative;\n  ", "\n  width: fit-content;\n  &:focus {\n    border-color: ", ";\n  }\n"])), function (_ref3) {
  var maxHeight = _ref3.maxHeight;
  return maxHeight;
}, function (_ref4) {
  var maxWidth = _ref4.maxWidth;
  return maxWidth;
}, function (_ref5) {
  var orientation = _ref5.orientation,
    theme = _ref5.theme;
  if (orientation === 'horizontal') {
    return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        align-items: center;\n        grid-template-columns: 1fr auto;\n      "])));
  } else {
    return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        grid-template-rows: 1fr auto;\n        padding: ", " 0;\n      "])), theme.space.medium);
  }
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.key;
});
var LegendContent = _styledComponents["default"].figure.withConfig({
  displayName: "PieLegend__LegendContent",
  componentId: "sc-1dt2jge-1"
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  position: relative;\n  .visx-legend-label {\n    width: max-content;\n  }\n"])));
var ContentPositioner = _styledComponents["default"].div.withConfig({
  displayName: "PieLegend__ContentPositioner",
  componentId: "sc-1dt2jge-2"
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  transition: transform 300ms;\n  width: max-content;\n  ", "\n"])), function (_ref7) {
  var orientation = _ref7.orientation,
    pageNumber = _ref7.pageNumber,
    pageSize = _ref7.pageSize;
  if (orientation === 'horizontal') {
    return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n        transform: translateX(", "px);\n      "])), pageNumber * pageSize * -1);
  } else {
    return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n        transform: translateY(", "px);\n      "])), pageNumber * pageSize * -1);
  }
});
//# sourceMappingURL=PieLegend.js.map
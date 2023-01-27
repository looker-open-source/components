"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVirtual = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _reactVirtual = require("@tanstack/react-virtual");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../utils");
var _templateObject;

var useVirtual = function useVirtual(_ref) {
  var data = _ref.data,
    scrollContainer = _ref.scrollContainer,
    _ref$defaultRowHeight = _ref.defaultRowHeight,
    defaultRowHeight = _ref$defaultRowHeight === void 0 ? 30 : _ref$defaultRowHeight,
    _ref$defaultColumnWid = _ref.defaultColumnWidth,
    defaultColumnWidth = _ref$defaultColumnWid === void 0 ? 100 : _ref$defaultColumnWid;
  var rowVirtualizer = (0, _reactVirtual.useVirtualizer)({
    count: data.length,
    getScrollElement: function getScrollElement() {
      return scrollContainer.current;
    },
    overscan: 10,
    estimateSize: function estimateSize() {
      return defaultRowHeight;
    }
  });
  var columnVirtualizer = (0, _reactVirtual.useVirtualizer)({
    count: data[0].length,
    getScrollElement: function getScrollElement() {
      return scrollContainer.current;
    },
    overscan: 30,
    horizontal: true,
    estimateSize: function estimateSize() {
      return defaultColumnWidth;
    }
  });
  var virtualRows = rowVirtualizer.getVirtualItems();
  var virtualColumns = columnVirtualizer.getVirtualItems();
  var _deriveVirtualizerPad = (0, _utils.deriveVirtualizerPadding)(rowVirtualizer),
    _deriveVirtualizerPad2 = (0, _slicedToArray2["default"])(_deriveVirtualizerPad, 2),
    paddingTop = _deriveVirtualizerPad2[0],
    paddingBottom = _deriveVirtualizerPad2[1];
  var _deriveVirtualizerPad3 = (0, _utils.deriveVirtualizerPadding)(columnVirtualizer),
    _deriveVirtualizerPad4 = (0, _slicedToArray2["default"])(_deriveVirtualizerPad3, 2),
    paddingLeft = _deriveVirtualizerPad4[0],
    paddingRight = _deriveVirtualizerPad4[1];
  var OffsetTop = function OffsetTop(_ref2) {
    var _ref2$as = _ref2.as,
      as = _ref2$as === void 0 ? 'td' : _ref2$as;
    return paddingTop > 0 ? _react["default"].createElement("tr", null, _react["default"].createElement(TableCell, {
      as: as,
      height: paddingTop
    })) : null;
  };
  var OffsetBottom = function OffsetBottom(_ref3) {
    var _ref3$as = _ref3.as,
      as = _ref3$as === void 0 ? 'td' : _ref3$as;
    return paddingBottom > 0 ? _react["default"].createElement("tr", null, _react["default"].createElement(TableCell, {
      as: as,
      height: paddingBottom
    })) : null;
  };
  var OffsetLeft = function OffsetLeft(_ref4) {
    var _ref4$as = _ref4.as,
      as = _ref4$as === void 0 ? 'td' : _ref4$as;
    return _react["default"].createElement(TableCell, {
      as: as
    }, _react["default"].createElement("div", {
      style: {
        width: "".concat(paddingLeft, "px")
      }
    }));
  };
  var OffsetRight = function OffsetRight(_ref5) {
    var _ref5$as = _ref5.as,
      as = _ref5$as === void 0 ? 'td' : _ref5$as;
    return _react["default"].createElement(TableCell, {
      as: as
    }, _react["default"].createElement("div", {
      style: {
        width: "".concat(paddingRight, "px")
      }
    }));
  };
  return {
    virtualRows: virtualRows,
    virtualColumns: virtualColumns,
    OffsetTop: OffsetTop,
    OffsetBottom: OffsetBottom,
    OffsetLeft: OffsetLeft,
    OffsetRight: OffsetRight
  };
};
exports.useVirtual = useVirtual;
var TableCell = _styledComponents["default"].td.attrs(function (_ref6) {
  var height = _ref6.height;
  return {
    height: height
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
//# sourceMappingURL=useVirtual.js.map
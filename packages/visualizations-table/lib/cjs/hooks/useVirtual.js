"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVirtual = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactVirtual = require("@tanstack/react-virtual");

var useVirtual = function useVirtual(_ref) {
  var _virtualRows$, _virtualRows;

  var data = _ref.data,
      scrollContainer = _ref.scrollContainer,
      _ref$defaultRowHeight = _ref.defaultRowHeight,
      defaultRowHeight = _ref$defaultRowHeight === void 0 ? 30 : _ref$defaultRowHeight;
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
  var getTotalSize = rowVirtualizer.getTotalSize,
      getVirtualItems = rowVirtualizer.getVirtualItems;
  var virtualRows = getVirtualItems();
  var paddingTop = virtualRows.length > 0 ? ((_virtualRows$ = virtualRows[0]) === null || _virtualRows$ === void 0 ? void 0 : _virtualRows$.start) || 0 : 0;
  var paddingBottom = virtualRows.length > 0 ? getTotalSize() - (((_virtualRows = virtualRows[virtualRows.length - 1]) === null || _virtualRows === void 0 ? void 0 : _virtualRows.end) || 0) : 0;

  var OffsetTop = function OffsetTop() {
    return paddingTop > 0 ? _react["default"].createElement("tr", null, _react["default"].createElement("td", {
      style: {
        height: "".concat(paddingTop, "px")
      }
    })) : null;
  };

  var OffsetBottom = function OffsetBottom() {
    return paddingBottom > 0 ? _react["default"].createElement("tr", null, _react["default"].createElement("td", {
      style: {
        height: "".concat(paddingBottom, "px")
      }
    })) : null;
  };

  return {
    virtualRows: virtualRows,
    OffsetTop: OffsetTop,
    OffsetBottom: OffsetBottom
  };
};

exports.useVirtual = useVirtual;
//# sourceMappingURL=useVirtual.js.map
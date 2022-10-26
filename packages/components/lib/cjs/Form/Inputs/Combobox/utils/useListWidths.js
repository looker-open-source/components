"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useListWidths = useListWidths;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useListWidths(_ref) {
  var isVisible = _ref.isVisible,
      propsMinWidth = _ref.minWidth,
      propsWidth = _ref.width,
      wrapperElement = _ref.wrapperElement;

  var _useState = (0, _react.useState)('auto'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      minWidth = _useState4[0],
      setMinWidth = _useState4[1];

  (0, _react.useEffect)(function () {
    function getWrapperWidth() {
      return wrapperElement && wrapperElement.getBoundingClientRect().width;
    }

    if (isVisible) {
      var newWidth = propsWidth || getWrapperWidth() || 'auto';
      var newMinWidth = propsMinWidth || (propsWidth === 'auto' ? getWrapperWidth() : undefined);
      setWidth(newWidth);
      setMinWidth(newMinWidth);
    }
  }, [propsMinWidth, propsWidth, wrapperElement, isVisible]);
  return {
    minWidth: minWidth,
    width: width
  };
}
//# sourceMappingURL=useListWidths.js.map
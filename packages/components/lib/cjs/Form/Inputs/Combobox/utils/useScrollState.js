"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScrollState = useScrollState;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function useScrollState() {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      listScrollPosition = _useState2[0],
      setListScrollPosition = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      listClientRect = _useState4[0],
      setListClientRect = _useState4[1];

  return {
    listClientRect: listClientRect,
    listScrollPosition: listScrollPosition,
    setListClientRect: setListClientRect,
    setListScrollPosition: setListScrollPosition
  };
}
//# sourceMappingURL=useScrollState.js.map
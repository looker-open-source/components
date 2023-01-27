"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MixedStates;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _UnorderedList = require("../../../../UnorderedList");
var _Fields = require("../../../Fields");
var _useMixedStateCheckbox = require("../useMixedStateCheckbox");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function MixedStates() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    parentState = _useState2[0],
    setParentState = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    appleState = _useState4[0],
    setAppleState = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    bananaState = _useState6[0],
    setBananaState = _useState6[1];
  var handleAppleChange = function handleAppleChange() {
    return setAppleState(!appleState);
  };
  var handleBananaChange = function handleBananaChange() {
    return setBananaState(!bananaState);
  };

  var fruitTree = {
    children: [{
      setState: setAppleState,
      state: appleState
    }, {
      setState: setBananaState,
      state: bananaState
    }],
    parent: {
      setState: setParentState,
      state: parentState
    }
  };

  var handleParentChange = (0, _useMixedStateCheckbox.useMixedStateCheckbox)(fruitTree);
  return _react["default"].createElement(_UnorderedList.UnorderedList, null, _react["default"].createElement("li", null, _react["default"].createElement(_Fields.FieldCheckbox, {
    label: "All Fruit",
    value: "all-fruit",
    onChange: handleParentChange,
    checked: parentState
  })), _react["default"].createElement("li", null, _react["default"].createElement(_UnorderedList.UnorderedList, {
    pl: "u5"
  }, _react["default"].createElement("li", null, _react["default"].createElement(_Fields.FieldCheckbox, {
    label: "\uD83C\uDF4F",
    value: "apple",
    onChange: handleAppleChange,
    checked: appleState
  })), _react["default"].createElement("li", null, _react["default"].createElement(_Fields.FieldCheckbox, {
    value: "apple",
    onChange: handleBananaChange,
    checked: bananaState,
    label: "\uD83C\uDF4C"
  })))));
}
//# sourceMappingURL=MixedStates.js.map
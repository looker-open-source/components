"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ListLayout;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../../../..");
var _Card = require("../../../../../Card");
var _Layout = require("../../../../../Layout");
var _2 = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ListLayout() {
  var _useState = (0, _react.useState)(400),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    containerWidth = _useState2[0],
    setContainerWidth = _useState2[1];
  var handleWidthChange = function handleWidthChange(e) {
    setContainerWidth(parseInt(e.currentTarget.value, 10));
  };
  return _react["default"].createElement(_Layout.SpaceVertical, {
    p: "u5"
  }, _react["default"].createElement(_.Label, null, "Move slider to adjust container width:"), _react["default"].createElement(_.Slider, {
    min: 100,
    max: 1000,
    step: 10,
    value: containerWidth,
    onChange: handleWidthChange,
    width: 400
  }), _react["default"].createElement(_Card.Card, {
    p: 20,
    width: containerWidth + 40
  }, _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_2.ComboboxMulti, null, _react["default"].createElement(_2.ComboboxMultiInput, {
    placeholder: "width=500"
  }), _react["default"].createElement(_2.ComboboxMultiList, {
    width: 500
  }, _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Pineapples"
  }))), _react["default"].createElement(_2.ComboboxMulti, null, _react["default"].createElement(_2.ComboboxMultiInput, {
    placeholder: "minWidth=420"
  }), _react["default"].createElement(_2.ComboboxMultiList, {
    minWidth: 420
  }, _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_2.ComboboxMultiOption, {
    value: "Pineapples"
  }))))));
}
//# sourceMappingURL=ListLayout.js.map
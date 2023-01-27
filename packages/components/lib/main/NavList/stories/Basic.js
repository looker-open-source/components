"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var MaterialIcons = _interopRequireWildcard(require("@styled-icons/material"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Basic(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  var handleClick = function handleClick() {
    setSelected(!selected);
  };
  return _react["default"].createElement(_.NavList, props, _react["default"].createElement(_.ListItem, {
    description: "Description",
    detail: "Interesting details",
    icon: _react["default"].createElement(MaterialIcons.Home, null),
    selected: true
  }, "Explore"), _react["default"].createElement(_.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.Info, null),
    onClick: handleClick,
    selected: selected,
    truncate: {
      description: "It's an item"
    }
  }, "Develop"), _react["default"].createElement(_.ListItem, {
    icon: _react["default"].createElement(MaterialIcons.Info, null),
    truncate: {
      description: 'Word Document - Last update 3 days ago'
    }
  }, "This is a really long navigation list item that should get truncated at some point waaaayyyy out in the nether regions of a long line of text"));
}
//# sourceMappingURL=Basic.js.map
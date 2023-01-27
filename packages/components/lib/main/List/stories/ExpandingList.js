"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpandingList;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../");
var _2 = require("../../");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ExpandingList() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showMore = _useState2[0],
    setShowMore = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    showMore2 = _useState4[0],
    setShowMore2 = _useState4[1];
  return _react["default"].createElement(_2.Space, {
    align: "start"
  }, _react["default"].createElement(_.List, null, _react["default"].createElement(_2.ListItem, null, "Cheddar"), _react["default"].createElement(_2.ListItem, null, "Gouda"), showMore ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.ListItem, null, "Swiss"), _react["default"].createElement(_2.ListItem, null, "American"), _react["default"].createElement(_2.ListItem, {
    onClick: function onClick() {
      return setShowMore(false);
    },
    description: "Keyboard nav should still work"
  }, "Show Less")) : _react["default"].createElement(_2.ListItem, {
    onClick: function onClick() {
      return setShowMore(true);
    },
    description: "To test keyboard nav"
  }, "Show More")), _react["default"].createElement(_.List, null, showMore2 ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.ListItem, {
    key: "0"
  }, "Cheddar"), _react["default"].createElement(_2.ListItem, {
    key: "1"
  }, "Swiss"), _react["default"].createElement(_2.ListItem, {
    key: "2"
  }, "Gouda"), _react["default"].createElement(_2.ListItem, {
    key: "3"
  }, "American"), _react["default"].createElement(_2.ListItem, {
    key: "4",
    onClick: function onClick() {
      return setShowMore2(false);
    },
    description: "Replaces all items"
  }, "Show less")) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.ListItem, {
    key: "5"
  }, "Cheddar"), _react["default"].createElement(_2.ListItem, {
    key: "6"
  }, "Gouda"), _react["default"].createElement(_2.ListItem, {
    key: "7",
    onClick: function onClick() {
      return setShowMore2(true);
    },
    description: "Replaces all items"
  }, "Show more"))));
}
//# sourceMappingURL=ExpandingList.js.map
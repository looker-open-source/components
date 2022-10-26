"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlledNoChildren = exports.ControlledLegacy = exports.Controlled = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _DialogMediumContent = require("../../fixtures/DialogMediumContent");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  return _react["default"].createElement(_.Dialog, {
    content: _react["default"].createElement(_DialogMediumContent.DialogMediumContent, null),
    isOpen: isOpen,
    setOpen: setOpen
  }, _react["default"].createElement("button", null, "Open Dialog"));
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};

var ControlledNoChildren = function ControlledNoChildren() {
  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isOpen = _useState4[0],
      setOpen = _useState4[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Dialog, {
    content: _react["default"].createElement(_DialogMediumContent.DialogMediumContent, null),
    isOpen: isOpen,
    setOpen: setOpen
  }), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Dialog"));
};

exports.ControlledNoChildren = ControlledNoChildren;
ControlledNoChildren.parameters = {
  storyshots: {
    disable: true
  }
};

var ControlledLegacy = function ControlledLegacy() {
  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      isOpen = _useState6[0],
      setOpen = _useState6[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Dialog, {
    content: _react["default"].createElement(_DialogMediumContent.DialogMediumContent, null),
    isOpen: isOpen,
    onClose: function onClose() {
      return setOpen(false);
    }
  }), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setOpen(true);
    }
  }, "Open Dialog"));
};

exports.ControlledLegacy = ControlledLegacy;
ControlledLegacy.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Controlled.js.map
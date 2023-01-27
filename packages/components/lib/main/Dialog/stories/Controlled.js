"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controlled;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Dialog = require("../../Dialog");
var _Button = require("../../Button");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Controlled() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Dialog.Dialog, {
    isOpen: isOpen,
    onClose: function onClose() {
      return setIsOpen(false);
    },
    content: _react["default"].createElement(_Dialog.DialogLayout, {
      header: "Simple header",
      footer: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.Button, {
        onClick: function onClick() {
          return setIsOpen(false);
        }
      }, "Done Reading"), _react["default"].createElement(_Button.ButtonTransparent, {
        color: "neutral",
        onClick: function onClick() {
          return setIsOpen(false);
        }
      }, "Finish Later"))
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
  }), _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Open Dialog"));
}
//# sourceMappingURL=Controlled.js.map
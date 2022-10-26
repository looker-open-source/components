"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UseDrawerHook = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _DialogLongContent = require("../../fixtures/DialogLongContent");

var _useDrawer2 = require("../useDrawer");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var UseDrawerHook = function UseDrawerHook() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var open = function open() {
    return setOpen(true);
  };

  var content = _react["default"].createElement(_DialogLongContent.DialogLongContent, null);

  var _useDrawer = (0, _useDrawer2.useDrawer)({
    content: content,
    isOpen: isOpen,
    setOpen: setOpen
  }),
      dialog = _useDrawer.dialog;

  return _react["default"].createElement(_react["default"].Fragment, null, dialog, _react["default"].createElement("button", {
    onClick: open
  }, "Open Drawer"));
};

exports.UseDrawerHook = UseDrawerHook;
UseDrawerHook.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=useDrawer.stories.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimationCallbacks;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Layout = require("../../Layout");
var _ = require("..");
var _Button = require("../../Button");
var _Form = require("../../Form");
var _Text = require("../../Text");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function AnimationCallbacks() {
  var inputRef = (0, _react.useRef)(null);
  var focusInput = (0, _react.useCallback)(function () {
    var _inputRef$current;
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  }, []);
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    message = _useState2[0],
    setMessage = _useState2[1];
  var showMessage = function showMessage() {
    setMessage('Panel closed');
  };
  return _react["default"].createElement(_Layout.Page, {
    hasAside: true
  }, _react["default"].createElement(_Layout.Aside, {
    width: "20rem"
  }, _react["default"].createElement(_.Panels, null, _react["default"].createElement(_Layout.Box, {
    p: "medium",
    height: 300
  }, _react["default"].createElement(_.Panel, {
    title: "Animation Callbacks",
    onAfterOpen: focusInput,
    onAfterClose: showMessage,
    content: _react["default"].createElement(_Layout.Box, {
      px: "medium"
    }, _react["default"].createElement(_Form.FieldText, {
      label: "Focus onAfterOpen",
      ref: inputRef
    }))
  }, _react["default"].createElement(_Button.Button, null, "Open Panel"))))), _react["default"].createElement(_Layout.Section, null, _react["default"].createElement(_Text.Paragraph, null, "Main stuff here..."), _react["default"].createElement(_Text.Paragraph, null, message)));
}
//# sourceMappingURL=AnimationCallbacks.js.map
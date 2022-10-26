"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogExampleLayout = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DialogExampleLayout = function DialogExampleLayout(_ref) {
  var header = _ref.header,
      children = _ref.children;

  var _useContext = (0, _react.useContext)(_.DialogContext),
      closeModal = _useContext.closeModal;

  return _react["default"].createElement(_.DialogLayout, {
    header: header,
    footer: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.Button, {
      onClick: closeModal
    }, "Done Reading"), _react["default"].createElement(_.ButtonTransparent, {
      color: "neutral",
      onClick: closeModal
    }, "Finish Later"))
  }, children);
};

exports.DialogExampleLayout = DialogExampleLayout;
//# sourceMappingURL=DialogExampleLayout.js.map
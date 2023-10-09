"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogLongContent = void 0;
var _react = _interopRequireDefault(require("react"));
var _DialogExampleLayout = require("./DialogExampleLayout");
var _Constitution = require("./Constitution");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DialogLongContent = function DialogLongContent() {
  return _react["default"].createElement(_DialogExampleLayout.DialogExampleLayout, {
    header: "The Constitution of the United States"
  }, _react["default"].createElement(_Constitution.Constitution, null));
};
exports.DialogLongContent = DialogLongContent;
//# sourceMappingURL=DialogLongContent.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Truncate;
var _react = _interopRequireDefault(require("react"));
var _Paragraph = require("../Paragraph");

function Truncate() {
  return _react["default"].createElement(_Paragraph.Paragraph, {
    truncate: true
  }, "This is a really long title that will need to truncate. It's gotta get real long so it hits the edge of the jest-dom virtual window size so I'm going to just keep typing and typing to make sure it triggers overflow as needed to prove that this is work properly. Are we there yet? Maybe? I sure hope so!");
}
//# sourceMappingURL=Truncate.js.map
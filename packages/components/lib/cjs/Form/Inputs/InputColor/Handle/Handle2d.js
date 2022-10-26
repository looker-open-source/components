"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Handle2d = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Handle = require("./Handle");

var _templateObject;

var Handle2d = _styledComponents["default"].div.attrs(function (_ref) {
  var color = _ref.color,
      x = _ref.x,
      y = _ref.y;
  return {
    style: {
      backgroundColor: color,
      transform: "translate(calc(".concat(x, "px - ").concat(_Handle.HANDLE_SIZE, " / 2), calc(").concat(y, "px - ").concat(_Handle.HANDLE_SIZE, " / 2))")
    }
  };
}).withConfig({
  displayName: "Handle2d",
  componentId: "sc-1peqtvu-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"])), _Handle.handleCSS);

exports.Handle2d = Handle2d;
//# sourceMappingURL=Handle2d.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Handle2d = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Handle = require("./Handle");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), _Handle.handleCSS);
exports.Handle2d = Handle2d;
//# sourceMappingURL=Handle2d.js.map
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _is_item_to_string = _interopRequireDefault(require("./is_item_to_string"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var nullItemToString = function nullItemToString(_ref) {
  var is = _ref.is;
  return "".concat((0, _is_item_to_string["default"])(is), "null");
};
var _default = nullItemToString;
exports["default"] = _default;
//# sourceMappingURL=null_item_to_string.js.map
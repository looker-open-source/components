"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var applyId = function applyId(root) {
  var id = 0;
  var traverse = function traverse(node) {
    var left = node.left,
      right = node.right;
    var newLeft, newRight;
    if (left) {
      newLeft = traverse(left);
    }
    id += 1;
    var newNode = _objectSpread(_objectSpread({}, node), {}, {
      id: id
    });
    if (right) {
      newRight = traverse(right);
    }
    return _objectSpread(_objectSpread({}, newNode), {}, {
      left: newLeft,
      right: newRight
    });
  };
  return traverse(root);
};
var _default = applyId;
exports["default"] = _default;
//# sourceMappingURL=apply_id_to_ast.js.map
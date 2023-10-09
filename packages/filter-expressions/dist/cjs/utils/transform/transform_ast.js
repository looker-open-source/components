"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformAST = void 0;
var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));
var _flow = _interopRequireDefault(require("lodash/fp/flow"));
var _apply_id_to_ast = _interopRequireDefault(require("./utils/apply_id_to_ast"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var transformAST = function transformAST(root, transforms) {
  return (0, _flow["default"])([].concat(_toConsumableArray(transforms), [_cloneDeep["default"], _apply_id_to_ast["default"]]))(root);
};
exports.transformAST = transformAST;
//# sourceMappingURL=transform_ast.js.map
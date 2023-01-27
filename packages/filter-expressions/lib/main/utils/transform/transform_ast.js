"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformAST = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));
var _flow = _interopRequireDefault(require("lodash/fp/flow"));
var _apply_id_to_ast = _interopRequireDefault(require("./utils/apply_id_to_ast"));

var transformAST = function transformAST(root, transforms) {
  return (0, _flow["default"])([].concat((0, _toConsumableArray2["default"])(transforms), [_cloneDeep["default"], _apply_id_to_ast["default"]]))(root);
};
exports.transformAST = transformAST;
//# sourceMappingURL=transform_ast.js.map
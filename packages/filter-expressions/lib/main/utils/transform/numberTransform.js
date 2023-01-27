"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberTransform = void 0;
var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));
var _number_types = require("../../types/number_types");
var _number_to_string = require("../number/number_to_string");
var _tree = require("../tree");
var _mergeMultiValueNodes = require("./mergeMultiValueNodes");
var _apply_id_to_ast = _interopRequireDefault(require("./utils/apply_id_to_ast"));

var countNots = function countNots(root) {
  var count = 0;
  (0, _tree.inorderTraversal)(root, function (node) {
    if (node.is === false) {
      count += 1;
    }
  });
  return count;
};

var removeDuplicateNotNodes = function removeDuplicateNotNodes(root) {
  var workingRoot = (0, _cloneDeep["default"])((0, _apply_id_to_ast["default"])(root));
  var andClauses = (0, _tree.treeToList)(workingRoot).filter(function (item) {
    return item.is === false;
  });
  return andClauses.length === 2 && (0, _number_to_string.serializeNumberNode)(andClauses[0]) === (0, _number_to_string.serializeNumberNode)(andClauses[1]) ?
  (0, _tree.removeNode)(workingRoot, andClauses[1].id) || {} : workingRoot;
};

var numberTransform = function numberTransform(root) {
  var countOfNotNodes = countNots(root);
  var mergeNodesWithDifferentIsValue = countOfNotNodes === 1;
  var mergedRoot = (0, _mergeMultiValueNodes.mergeMultiValueNodes)(root, _number_types.NumberTypes.EQUAL, mergeNodesWithDifferentIsValue);

  var checkForDuplicates = countOfNotNodes === 2;
  return checkForDuplicates ? removeDuplicateNotNodes(mergedRoot) : mergedRoot;
};
exports.numberTransform = numberTransform;
//# sourceMappingURL=numberTransform.js.map
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.partitionTreeProps = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _types = require("../types");

var partitionTreeProps = function partitionTreeProps(props) {
  var treeItemInnerProps = {};
  var accordionInnerProps = {};
  Object.entries(props).forEach(function (prop) {
    var _prop = (0, _slicedToArray2["default"])(prop, 2),
        propKey = _prop[0],
        propValue = _prop[1];

    if (props && (0, _types.isTreeItemInnerPropKey)(propKey)) {
      treeItemInnerProps[propKey] = propValue;
    } else {
      accordionInnerProps[propKey] = propValue;
    }
  });
  return [treeItemInnerProps, accordionInnerProps];
};

exports.partitionTreeProps = partitionTreeProps;
//# sourceMappingURL=partitionTreeProps.js.map
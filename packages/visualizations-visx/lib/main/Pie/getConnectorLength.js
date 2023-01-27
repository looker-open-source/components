"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnectorLength = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _d3Shape = require("d3-shape");

var LABEL_OFFSET = 10;

var getConnectorLength = function getConnectorLength(angle, outerRadius) {
  var _pointRadial = (0, _d3Shape.pointRadial)(angle, outerRadius),
    _pointRadial2 = (0, _slicedToArray2["default"])(_pointRadial, 2),
    _ = _pointRadial2[0],
    connectorY = _pointRadial2[1];

  var yPosPercent = Math.abs(connectorY / outerRadius);

  var connectorLength = Math.pow(1.15, Math.exp(yPosPercent * 3.37)) + LABEL_OFFSET;
  return connectorLength;
};
exports.getConnectorLength = getConnectorLength;
//# sourceMappingURL=getConnectorLength.js.map
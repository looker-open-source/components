"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.edgeShadow = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _templateObject;

var edgeShadow = function edgeShadow() {
  var placement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'left';
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var pseudo = ':after';
  var relativeTo = 'right';
  var shadowReverse = '';

  if (placement === 'right') {
    pseudo = ':before';
    relativeTo = 'left';
    shadowReverse = '-';
  }

  var shadow = "".concat("".concat(shadowReverse).concat(depth, "px"), " 0 ", depth, "px -").concat(depth, "px rgba( 0, 0, 0, 0.25) inset");
  var position = depth + 7;
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    &", " {\n      box-shadow: ", ";\n      content: ' ';\n      height: 100%;\n      position: absolute;\n      ", "\n      top: 0;\n      width: ", "px;\n    }\n  "])), pseudo, shadow, "".concat(relativeTo, ": -").concat(position, "px;"), position);
};

exports.edgeShadow = edgeShadow;
//# sourceMappingURL=edgeShadow.js.map